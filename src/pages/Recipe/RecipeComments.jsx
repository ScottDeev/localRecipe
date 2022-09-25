import { useState } from "react"
import { Timestamp } from "firebase/firestore"
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from "../../hooks/useFirestore"
import { formatDistanceToNow } from "date-fns"

export default function RecipeComments({recipe}) {
  const {updateDocument, response} = useFirestore('local-recipe')
  const [newComment, setNewComment] = useState('')
  const [showComments, setShowComments] = useState(false)
  const {user} = useAuthContext()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const commentToAdd = {
      displayName: user.displayName,
      content: newComment,
      createdAt: Timestamp.fromDate(new Date()),
      id: Math.random()
    }
    await updateDocument(recipe.id, {
      comments: [...recipe.comments, commentToAdd]
    });
    if(!response.error){
      setNewComment('')
    }
  }

  return (
    <div className="flex flex-col">
      <h4 className="font-semibold text-[30px]">Comments</h4>

      {recipe.comments.length > 0 && <>
      {(!showComments && recipe.comments.length > 2) && <button onClick={() => setShowComments(true)} className="bg-white rounded-[0.3rem] px-[8px] py-[10px] text-black hover:bg-black hover:text-white border border-black transition duration-300">Load more comments</button>}
      {(showComments && recipe.comments.length > 2) && <button onClick={() => setShowComments(false)} className="bg-white rounded-[0.3rem] px-[8px] py-[10px] text-black hover:bg-black hover:text-white border border-black transition duration-300">Show less comments</button>}
      <ul className=''>
        {recipe.comments.length > 0 && recipe.comments.map((comment, i) => (!showComments ? ( i >= recipe.comments.length - 2) : (i >= 0)) && (
          <li className="flex flex-col gap-[10px] py-[20px] border-t bg-[#f9f9f9] rounded-[0.3rem] px-[20px] mt-[10px]" key={comment.id}>
            <div className="">
              <h3 className="capitalize font-medium text-[18px]">{comment.displayName}</h3>
              <p className="text-[12px]">{formatDistanceToNow(comment.createdAt.toDate(), {addSuffix: true})}</p>
            </div>

            <div className="">
              <p>

              {comment.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
      </>}
      <form className="flex flex-col relative" onSubmit={handleSubmit}>
        <label className="flex flex-col mb-[15px]">
          <span className="font-semibold text-[25px] mt-[15px]">Drop a feedback</span>
          <textarea
            className="bg-[#f9f9f9] h-[200px] p-[15px]"
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="absolute bottom-[30px] right-[10px] bg-[#ff642b] rounded-[0.3rem] px-[8px] py-[2px] text-white hover:bg-white hover:text-[#ff642b] border border-[#ff642b] transition duration-300">Add Comment</button>
      </form>
    </div>
  )
}
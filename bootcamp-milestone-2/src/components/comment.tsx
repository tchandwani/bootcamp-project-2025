type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date): string {
  const date = new Date(time);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  
  return `${month} ${day} ${year} ${hours}:${minutesStr}${ampm}`;
}

function Comment({ comment }: CommentProps) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '10px', 
      marginBottom: '10px',
      borderRadius: '5px' 
    }}>
      <h4 style={{ margin: '0 0 5px 0' }}>{comment.user}</h4>
      <p style={{ margin: '0 0 5px 0' }}>{comment.comment}</p>
      <span style={{ fontSize: '0.85em', color: '#666' }}>
        {parseCommentTime(comment.time)}
      </span>
    </div>
  );
}

export default Comment;
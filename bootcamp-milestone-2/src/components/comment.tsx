import React from "react";
import type { IComment } from "../database/blogSchema";

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date): string {
  const date = new Date(time);
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default function Comment({ comment }: CommentProps) {
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


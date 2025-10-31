import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './blogPreview.module.css';
import type { Blog } from '@/app/blogData';

export default function BlogPreview({ title, date, description, image, imageAlt, slug }: Blog) {
  return (
    <div className={style.blogPost}>
      <h3>{title}</h3>
      <Image 
        src={image} 
        alt={imageAlt} 
        width={500} 
        height={300}
        className={style.blogImage}
      />
      <p className={style.blogDescription}>{description}</p>
      <p className={style.blogDate}>Posted on {date}</p>
      
      <Link href={`/blog/${slug}`} className={style.readMore}>
        Read More →
      </Link>
    </div>
  );
}
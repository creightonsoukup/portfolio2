import React from 'react';
import List from './list';
import SectionHeader from './section_header'

const BlogPreview = (props) => {
  return (
    <section className='blog-snippit'>
      <SectionHeader header='blog'/>
      <List content={'blog'} />
    </section>
  )
}

export default BlogPreview

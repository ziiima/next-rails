import { Navigation } from '@/components/Navigation'
import { Paragraph, Post } from '../_components/Post'

export const ParagraphPage = () => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <Navigation />
      </div>
      <div>
        <h1>ParagraphPage</h1>
        <Post title="My first blog post">
          <Paragraph>Hello there</Paragraph>
          <Paragraph>This is an example of a componentized blog post</Paragraph>
        </Post>
        <hr />
        <Post title="My second blog post">
          <Paragraph>Hello there</Paragraph>
          <Paragraph>This is another example.</Paragraph>
          <Paragraph>Wa-hoo!</Paragraph>
        </Post>
        <hr />
        <Post title="The final blog post">
          <Paragraph>C’est fin</Paragraph>
        </Post>
      </div>
    </div>
  )
}

export default ParagraphPage

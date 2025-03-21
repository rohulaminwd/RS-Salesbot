// const components: JSXMapSerializer = {
//   label: ({ node, children }) => {
//     if (node.data.label === "codespan") {
//       return <code>{children}</code>;
//     }
//   },
// };

export default function RichText() {
  return (
    <div>
      <div className="prose prose-lg prose-slate prose-invert">
        {/* <PrismicRichText
          field={slice.primary.content}
          components={components}
        /> */}
      </div>
    </div>
  )
}

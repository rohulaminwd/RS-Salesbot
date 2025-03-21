"use client"

const Bento = (): JSX.Element => {
  const demoSlice = {
    items: [
      {
        title: "Lorem ipsum",
        body: "Sint laborum nostrud amet cillum consequat dolor cillum mollit ",
        image:
          "https://images.prismic.io/glisten-ai/65dfb3ab9c42d04f7d969977_long-screenshot.png?auto=format%2Ccompress&fit=max&w=1080",
        wide: true,
      },
      {
        title: "Stopped",
        body: "Sint laborum nostrud amet cillum consequat dolor",
        image:
          "https://images.prismic.io/glisten-ai/65dfb3ad9c42d04f7d969979_small-screenshot.png?auto=format%2Ccompress&fit=max&w=6400",
        wide: false,
      },

      {
        title: "Stopped",
        body: "Sint laborum nostrud amet cillum consequat dolor ",
        image:
          "https://images.prismic.io/glisten-ai/65dfb3ad9c42d04f7d969979_small-screenshot.png?auto=format%2Ccompress&fit=max&w=6400",
        wide: false,
      },
      {
        title: "Lorem ipsum",
        body: "Sint laborum nostrud amet cillum consequat dolor cillum mollit ",
        image:
          "https://images.prismic.io/glisten-ai/65dfb3ab9c42d04f7d969977_long-screenshot.png?auto=format%2Ccompress&fit=max&w=1080",
        wide: true,
      },
    ],
  }
  return (
    <div className="mx-auto my-20 max-w-6xl px-4 py-10">
      <div>
        <h2 className="text-balance text-center text-5xl  font-medium text-white md:text-7xl">
          The new
        </h2>
        <em className="mx-auto flex items-center justify-center bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text text-center text-5xl font-medium not-italic text-transparent md:text-7xl">
          Gold Standard.
        </em>
      </div>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <p>
          ntroducing a new way of building components and layouts that leaves
          everything else in the dust.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {demoSlice.items.map((item, index) => (
          <div
            className={`glass-container row-span-3  grid  grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4
              ${item.wide ? "md:col-span-2" : "md:col-span-1"}`}
            key={index}
          >
            <h3 className="text-2xl text-white ">{item.title}</h3>
            <div className="text-balance text-slate-300">
              <p>{item.body}</p>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="max-h-36 w-auto w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bento

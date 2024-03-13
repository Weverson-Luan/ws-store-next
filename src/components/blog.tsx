/* eslint-disable prettier/prettier */
const Blog = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://api.github.com/users/Weverson-Luan");
  const users = await response.json();
  console.log("s", users);

  return (
    <div className="w-full h-full pl-24">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div className="font-sans">
          <span className="text-base md:text-sm text-green-500 font-bold">
            &lt;
            <span>
              {" "}
              <a
                href="/#"
                className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
              >
                BACK TO BLOG
              </a>
              <p></p>
              <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                Welcome to Minimal Blog
              </h1>
              <p className="text-sm md:text-base font-normal text-gray-600">
                Published 19 February 2019
              </p>
            </span>
          </span>
        </div>

        <p className="py-6">
          👋 Welcome fellow{" "}
          <a
            className="text-green-500 no-underline hover:underline"
            href="https://www.tailwindcss.com"
          >
            Tailwind CSS
          </a>{" "}
          and miminal monochrome blog fan. This starter template provides a
          starting point to create your own minimal monochrome blog using
          Tailwind CSS and vanilla Javascript.
        </p>

        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Blog;

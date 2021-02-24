import React from "react";
import urlsApi from "apis/urls";

const List = ({ urls, fetchUrls }) => {
  const handleTogglePin = async (url) => {
    try {
      await urlsApi.update(url.slug, url.pinned);
      fetchUrls();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="my-2 w-4/6 mx-auto">
      <div>
        <ul className="border shadow-sm">
          <li className="flex items-center justify-between bg-light-olive-green mb-px p-4 text-white text-xl">
            <p className="w-2/5 flex justify-center font-semibold">Original</p>
            <p className="w-2/5 flex justify-center font-semibold">Short</p>
          </li>
          {urls.map((url, index) => (
            <li key={index} className="bg-white mb-px">
              <article className="flex justify-between">
                <aside className="flex">
                  <a
                    className={`${
                      url.pinned ? "text-light-olive-green" : "text-gray-600"
                    } p-4 bg-gray-100 hover:text-olive-green-hover`}
                    onClick={() => handleTogglePin(url)}
                  >
                    <svg
                      width="16px"
                      height="16px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="thumbtack"
                      className="svg-inline--fa fa-thumbtack fa-w-12"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"
                      />
                    </svg>
                    {url.pinned}
                  </a>
                </aside>
                <div className="w-4/5 flex justify-between items-center">
                  <a
                    className="w-3/5 cursor-pointer p-4 text-gray-500 hover:text-gray-800 break-all"
                    href={url.original_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {url.original_link}
                  </a>
                  <a
                    className="w-2/5 cursor-pointer p-4 text-gray-900 hover:text-light-olive-green break-all"
                    href={window.location.href + url.slug}
                  >
                    {window.location.href + url.slug}
                  </a>
                </div>
                <aside className="flex items-center p-2">
                  <span className="bg-green-400 px-2 py-1 border border-light-olive-green text-white font-bold">
                    {url.click_count ? url.click_count : 0}
                  </span>
                </aside>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default List;

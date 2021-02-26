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
      <div className="flex flex-col">
        <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-800 px-4 py-3">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Pinned
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Original URL
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Shorten URL
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Clicks
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {urls.map((url, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <a
                        className={`${
                          url.pinned
                            ? "text-light-olive-green"
                            : "text-gray-600"
                        } cursor-pointer p-4 bg-gray-100 hover:text-olive-green-hover`}
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
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-600">
                          <a href={url.original_link}>{url.original_link}</a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="cursor-pointer px-4 py-3 whitespace-nowrap">
                    <div className="text-base text-gray-900">
                      <a
                        className="hover:underline"
                        href={window.location.href + url.slug}
                      >
                        {window.location.href + url.slug}
                      </a>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className=" px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {url.click_count ? url.click_count : 0}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default List;

"use client";
import React from "react";
export default function About() {
  return (
    <div>
      <div className="container m-auto">
        <div className="flex flex-wrap items-center justify-center w-full text-center">
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col rounded border-2 border-blue-700 bg-blue-700">
              <div className="py-5 text-blue-700 bg-white">
                <h3>Basic</h3>
                <p className="text-5xl font-bold">
                  $19.<span className="text-3xl">95</span>
                </p>
                <p className="text-xs uppercase">Per Month</p>
              </div>
              <div className="py-5 bg-blue-700 text-white rounded-b">
                <p>Feature of the plan</p>
                <p>Another feature plan feature</p>
                <p>Yet another plan feature</p>
                <button className="px-5 py-2 mt-5 uppercase rounded bg-white text-blue-700 font-semibold hover:bg-blue-900 hover:text-white">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col rounded">
              <div className="py-7 bg-blue-700 text-white rounded-t">
                <p className="uppercase text-yellow-300 font-extrabold">
                  Most Popular
                </p>
                <h3>Standard</h3>
                <p className="text-5xl font-bold">
                  $49.<span className="text-3xl">95</span>
                </p>
                <p className="text-xs uppercase">Per Month</p>
              </div>
              <div>
                <div className="pt-1 pb-7 bg-blue-700 text-white rounded-b">
                  <p>Feature of the plan</p>
                  <p>Another feature plan feature</p>
                  <p>Yet another plan feature</p>
                  <button className="px-5 py-2 mt-5 uppercase rounded bg-yellow-300 text-blue-700 font-semibold hover:bg-blue-900 hover:text-white">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col rounded border-2 border-blue-700 bg-blue-700">
              <div className="py-5 text-blue-700 bg-white">
                <h3>Advanced</h3>
                <p className="text-5xl font-bold">
                  $99.<span className="text-3xl">95</span>
                </p>
                <p className="text-xs uppercase">Per Month</p>
              </div>
              <div className="py-5 bg-blue-700 text-white rounded-b">
                <p>Feature of the plan</p>
                <p>Another feature plan feature</p>
                <p>Yet another plan feature</p>
                <button className="px-5 py-2 mt-5 uppercase rounded bg-white text-blue-700 font-semibold hover:bg-blue-900 hover:text-white">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import '../tailwind.css'


function Portfolio(props) {
    return (
      <div>
        <div class="flex justify-center">
          <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              {props.projects.map((project) => (
                <h5
                  class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                  key={project.id}
                >
                  {project.name}
                </h5>
              ))}
              {/******************************************************* */}
              {props.projects.map((project) => (
                <p
                  class="mb-4 text-base text-neutral-600 dark:text-neutral-200"
                  key={project.id}
                >
                  {project.languages}
                </p>
              ))}

              {props.projects.map((project) => (
                <p
                  class="mb-4 text-base text-neutral-600 dark:text-neutral-200"
                  key={project.id}
                >
                  {project.github}
                </p>
              ))}
              {props.projects.map((project) => (
                <button
                  type="button"
                  class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  key={project.id}
                ><a href= {project.example}>
                  Take a look!
                  </a></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Portfolio;
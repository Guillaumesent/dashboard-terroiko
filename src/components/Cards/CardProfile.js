import React from "react";

export default function CardProfile() {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 flex justify-center">
            <div className="relative">
              <img
                alt="Guillaume"
                src="https://i.imgur.com/adYw0Dn.png"
                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
              />
            </div>
          </div>
          <div className="w-full px-4 text-center mt-20">
            <div className="flex justify-center py-4 lg:pt-4 pt-8">
              <div className="mr-4 p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  178
                </span>
                <span className="text-sm text-blueGray-400">Species</span>
              </div>
              <div className="mr-4 p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  42
                </span>
                <span className="text-sm text-blueGray-400">Inventory</span>
              </div>
              <div className="lg:mr-4 p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  312
                </span>
                <span className="text-sm text-blueGray-400">Observations</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
            Guillaume Sentier
          </h3>
          <div className="text-sm leading-normal mb-2 text-blueGray-400 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
            Puylaurens, France
          </div>
          <div className="mb-2 text-blueGray-600 mt-10">
            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
            Web Designer & Développeur Freelance
          </div>
          <div className="mb-2 text-blueGray-600">
            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
            Domaine de Montdurand
          </div>
        </div>
        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-11/12 px-4">
              <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
              Développe des applications web de A à Z. Guillaume t'aide à passer d'une idée à un produit robuste, avec un bon code et une belle interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

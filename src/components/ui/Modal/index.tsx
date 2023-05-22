'use client'

import { useForm } from "react-hook-form";
import { Input } from "../Input"
import Button from "../Button";
import { ReactNode } from "react";

interface propsModal {
  children: ReactNode;
  title: string;
  blur?: boolean;
  CloseOnClick?: boolean;
  visible: true;
  onClose: () => void;
}


export function Modal({visible, onClose}: any) {
  const { register, handleSubmit } = useForm();
  const handleOnClose = (e: any) => {
    if (e?.target?.id === 'container') onClose()
  }

  if(!visible) return null

  return (
    <>


      <div 
        id="container"
        onClick={handleOnClose}
        className={`fixed inset-0 justify-center items-center md:inset-0 flex bg-black bg-opacity-30 backdrop-blur-sm z-[999]`}>
          <div className="relative overflow-y-auto p-4 w-full max-w-2xl h-full md:h-auto">
              <div className="relative  p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                  <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Adicionar Empresa
                      </h3>
                      <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          <span className="sr-only">Close modal</span>
                      </button>
                  </div>
                  <form action="#">
                      <div className="grid gap-4 mb-4 sm:grid-cols-2">
                          <div>
                              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                              <Input 
                                type="text" 
                                name="name" 
                                label="name" 
                                placeholder="Type product name"
                                required
                                register={register}/>
                          </div>
                          <div>
                              <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                              <Input register={register} type="text" name="brand" label="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required/>
                          </div>
                          <div>
                              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                              <Input register={register} type="number" name="price" label="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required/>
                          </div>
                          <div>
                              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                              <select {...register("category")} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                  <option selected>Select category</option>
                                  <option value="TV">TV/Monitors</option>
                                  <option value="PC">PC</option>
                                  <option value="GA">Gaming/Console</option>
                                  <option value="PH">Phones</option>
                              </select>
                          </div>
                          <div className="sm:col-span-2">
                              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                              <textarea {...register("description")} id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>                    
                          </div>
                      </div>
                      <div className="flex w-full justify-end">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                          <Button type="submit" >
                              Adicionar
                          </Button>
                          <Button typeButton="Cancel" onClick={onClose} >
                              Cancelar
                          </Button>
                        </div>
                      </div>  
                  </form>
              </div>
          </div>
      </div>
    </>
  )
}
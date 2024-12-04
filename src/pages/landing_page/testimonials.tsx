import Circle from "../../components/reuseable/gradient_cirle"

const Testimonials = () => {
    const messages =[
        {
            id:1,
            author:"John Doe",
            message:"The guys are so awesome, professionals and thay go about thier duty with integrity",
        },
        {
            id:2,
            author:"Maddie Doe",
            message:"The guys are so awesome, professionals and thay go about thier duty with integrity",
        },
        // {
        //     id:3,
        //     author:"Isaiah Doe",
        //     message:"The guys are so awesome, professionals and thay go about thier duty with integrity",
        // }
    ]
  return (
       <div className="mx-auto py-12 md:py-14 w-full md:w-9/12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="font-semibold text-[30px] text-neutral-900 md:text-[48px]">Testimonials</h2>
        </div>

        <div className="sm:flex sm:gap-x-6 lg:gap-x-8 space-y-3 sm:space-y-0 mt-10 sm:mt-16">
            {messages.map((message, index)=>(
            <div 
            key={message.id}
            className="border-2 bg-white px-6 py-6 rounded-lg text-left overflow-hidden">
            <Circle/>

              <p className="text-[16px] text-neutral-600">
                {message.message}
              </p>
              <div className="mt-5">
                <p className="font-medium text-black">{message.author}</p>

              </div>
            </div>
            ))}
        </div>
      </div>
    </div> 
  )
}

export default Testimonials
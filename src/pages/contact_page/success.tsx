import Footer from "../../components/footer";
import Header from "../../components/header";
import Circle from "../../components/reuseable/gradient_cirle";


const Success = () => {
  return (
    <>
    <Header/>
     <div className="mx-auto mt-36 w-full max-w-md rounded-lg bg-white p-6">
     <div className="mb-6 flex justify-center">
      <Circle/>
     </div>
            <h2 className="mb-4 text-center text-2xl font-bold">Congratulations</h2>
            <p className="mb-4 text-center text-gray-600">
              We&apos;re excited to help you with your project!
            </p>
            <p className="mb-4 text-center text-gray-600">
              Our team will review your submission and get back to you within 24 hours.</p>
          </div>
          <Footer/>
          </>
  )
}

export default Success

import Footer from "../../components/footer"
import Header from "../../components/header"

import { Layout, Code, Search, PenTool, BarChart, HelpCircle } from 'lucide-react'
import GetQuotes from "../../components/reuseable/get_quotes"
import AllServices from "./all_services"

// import ImageComponent from "../../components/ImageCompnent"

// const image = "https://plus.unsplash.com/premium_photo-1663933533712-eef7095f782b?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const Services = () => {
  const services = [
    { id: 'website-design', title: 'Website design', description: 'I need a website design.', icon: Layout },
    { id: 'website-development', title: 'Website development', description: 'I need a website built.', icon: Code },
    { id: 'ux-research', title: 'UX Research', description: 'I want to understand users.', icon: Search },
    { id: 'content-creation', title: 'Content creation', description: 'I want to grow my blog.', icon: PenTool },
    { id: 'seo-optimization', title: 'SEO Optimization', description: 'Help me grow organically.', icon: BarChart },
    { id: 'something-else', title: 'Something else', description: "We're here to help!", icon: HelpCircle }
  ]
  return (
    <>
        <Header/>
        <div className="my-12">
        <header className="space-y-4 text-center">
          {/* <div className="inline-block border-gray-900 px-3 py-1 border text-sm">
            LIFE-CHANGING UPDATE
          </div> */}
          <h1 className="font-bold text-5xl">Our Services</h1>
          <p className="mx-auto max-w-2xl text-xl">
            Stunning footage. Longer clips. Jaw-dropping moves.
            We've got a new model. And you've got the power to do all kinds of wild new things.
          </p>
        </header>
        </div>
        <AllServices/>
        {/* <div className="mx-auto mb-12 w-9/12 md:w-6/12">
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {services.map(service => (
                <div
                  key={service.id}
                  // onClick={() => handleServiceSelect(service.id)}
                  className={`px-4 py-8 border-2 rounded-lg text-left transition-all`}
                >
                  <service.icon className="mb-2 w-6 h-6" />
                  <div className="font-medium">{service.title}</div>
                  <div className="text-gray-600 text-sm">{service.description}</div>
                </div>
              ))}
            </div>
          </div> */}
          
        <Footer/>
        
    <GetQuotes/>
      
    </>
  )
}

export default Services
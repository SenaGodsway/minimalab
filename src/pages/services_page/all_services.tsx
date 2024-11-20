import { Layout, Code, Search, PenTool, BarChart, HelpCircle } from 'lucide-react'

const AllServices = () => {
    const services = [
        { id: 'website-design', title: 'Website design', description: 'I need a website design.', icon: Layout },
        { id: 'website-development', title: 'Website development', description: 'I need a website built.', icon: Code },
        { id: 'ux-research', title: 'UX Research', description: 'I want to understand users.', icon: Search },
        { id: 'content-creation', title: 'Content creation', description: 'I want to grow my blog.', icon: PenTool },
        { id: 'seo-optimization', title: 'SEO Optimization', description: 'Help me grow organically.', icon: BarChart },
        { id: 'something-else', title: 'Something else', description: "We're here to help!", icon: HelpCircle }
      ]
  return (
    <div className="mx-auto mb-12 w-9/12 md:w-6/12">
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {services.map(service => (
        <div
          key={service.id}
          // onClick={() => handleServiceSelect(service.id)}
          className={`px-4 py-8 border-2 hover:border-black rounded-lg text-left transition-all`}
        >
          <service.icon className="mb-2 w-6 h-6" />
          <div className="font-medium">{service.title}</div>
          <div className="text-gray-600 text-sm">{service.description}</div>
        </div>
      ))}
    </div>
  </div> 
  )
}

export default AllServices
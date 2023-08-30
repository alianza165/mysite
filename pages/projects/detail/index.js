import { ClipboardDocumentCheckIcon, LockClosedIcon, ServerIcon, ArrowTrendingDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Breadcrumb from '../../../utils/breadcrumb';


const dictionaries = {

  ecommerce : [
  {
    name: 'Ecommerce / marketing template',
    backgroundImage: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/blur2.jpeg',
    title: 'E-Commerce',
    description: 'Experience the epitome of ecommerce brilliance with our Next.js, Tailwind, and Django API powered template. Seamlessly integrate your business, relishing stunning design and effortless functionality. Elevate your online presence today with easy integration and captivating aesthetics.',
    icon1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/django.svg',
    icon2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/react-2.svg',
    icon1_name: 'Django',
    icon2_name: 'React',
    image1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/ecommerce.png',
    image2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/ecommerce_mobile.png',
    screenshot1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/econ/econ_s1.png',
    screenshot2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/econ/econ_s2.png',
    screenshot3: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/econ/econ_s3.png',
    screenshot4: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/econ/econ_s4.png',
    developer_text: 'Our templates are thoughtfully crafted with the latest and greatest versions of the tools we love so that they are easy to maintain, and fun to actually work on.',
    tech1: 'Next.js v13.4',
    tech2: 'Django v4.2',
    tech3: 'Tailwind CSS v3.3',
    tech4: 'React v18',
    tech5: 'AWS',
  },
],

dashboard : [
  {
    name: 'Asset and Inventory Management',
    backgroundImage: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/blur2.jpeg',
    title: 'Dashboard',
    description: 'Streamline your asset and inventory management with our dynamic dashboards. Seamlessly integrate teams, empower managers, and assess inventory at a glance. Plan for the future with data-backed insights, optimizing orders and operations for increased efficiency.',
    icon1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/react-2.svg',
    icon2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/rest.svg',
    icon1_name: 'React',
    icon2_name: 'Django Rest',
    image1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dashboard.png',
    image2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dashboard_mobile.png',
    screenshot1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dash/dash_s1.png',
    screenshot2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dash/dash_s2.png',
    screenshot3: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dash/dash_s3.png',
    screenshot4: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dash/dash_s4.png',
    developer_text: 'Our templates are thoughtfully crafted with the latest and greatest versions of the tools we love so that they are easy to maintain, and fun to actually work on.',
    tech1: 'Next.js v13.4',
    tech2: 'Django v4.2',
    tech3: 'Tailwind CSS v3.3',
    tech4: 'React v18',
    tech5: 'AWS',
  },
],

visualization : [
  {
    name: 'Data Insights at a Glance',
    backgroundImage: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/blur2.jpeg',
    title: 'Visualization',
    description: 'Unlock operational excellence through data visualization. Leverage AWS QuickSight to gain comprehensive insights instantly. Dive into data points, detect anomalies, and steer performance with precision. Elevate decision-making and efficiency, all from a single, intuitive interface.',
    icon1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/amazon-quicksight.svg',
    icon2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/postgresql.svg',
    icon1_name: 'Amazon Quicksight',
    icon2_name: 'PostgreSQL',
    image1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/visualization.png',
    image2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/visualization_mobile.png',
    screenshot1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/viz/viz_s1.png',
    screenshot2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/viz/viz_s2.png',
    screenshot3: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/viz/viz_s3.png',
    screenshot4: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/viz/viz_s4.png',
    developer_text: 'Our templates are thoughtfully crafted with the latest and greatest versions of the tools we love so that they are easy to maintain, and fun to actually work on.',
    tech1: 'PostgreSQL v14',
    tech2: 'AWS Quicksight',
    tech3: 'MQTT v5',
    tech4: 'Python v3.10',
    tech5: 'AWS S3',
  },
],

management_tool : [
  {
    name: 'Streamlined Workflows, Enhanced Transparency',
    backgroundImage: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/blur2.jpeg',
    title: 'Management Tools',
    description: 'Elevate productivity and transparency with our management tools. Streamline employee workflows, ensuring seamless processes and resource visibility. Empower teams to collaborate efficiently, optimizing operations and fostering growth in a well-organized ecosystem.',
    icon1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/django.svg',
    icon2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/postgresql.svg',
    icon1_name: 'Django',
    icon2_name: 'PostgreSQL',
    image1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/django.png',
    image2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/django_mobile.png',
    screenshot1: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/tools/tool_s1.png',
    screenshot2: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/tools/tool_s2.png',
    screenshot3: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/tools/tool_s3.png',
    screenshot4: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/tools/tool_s4.png',
    developer_text: 'Our templates are thoughtfully crafted with the latest and greatest versions of the tools we love so that they are easy to maintain, and fun to actually work on.',
    tech1: 'Django v4.2',
    tech2: 'PostgreSQL v12',
    tech3: 'AWS EC2',
    tech4: 'jQuery v3.7',
    tech5: 'Bash 5.1',
  },
],
}

export default function Ecommerce(theme) {

  const router = useRouter();
  const { name } = router.query;
  const query = 'projects'
  
  const detail = dictionaries[name]?.[0] || null;

  const themeClass = theme.theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white';
  const themeFont1 = theme.theme === 'dark' ? 'text-gray-200' : 'text-gray-900';
  const themeFont2 = theme.theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const imageClass = theme.theme === 'dark' ? 'brightness-90' : '';
  const logoClass = theme.theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/github_dark.png' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/github.svg';
  const bgImage = theme.theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dark_blur.jpg' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/tech1.png';
  const bgClass = `url(${bgImage})`;


  if (!detail) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={`overflow-hidden pt-6 md:pt-10 ${themeClass}`}>
    <Breadcrumb crumb={{ query, name }} />
        <div className="mx-auto divide-y mt-6">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 md:gap-y-32 lg:mx-0 lg:max-w-none lg:grid-cols-3 px-6">
            <div className="lg:pr-8 lg:pt-4 col-span-1">
              <div className="lg:max-w-lg">
                <div className='flex items-center'>
                  <h2 className="text-base font-semibold leading-7 text-sky-500">{detail.name}</h2>
                  <Image src={logoClass} width={60} height={60} className='pl-4' />
                </div>
                <p className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${themeFont1}`}>{detail.title}</p>
                <p className={`mt-6 text-lg leading-8 ${themeFont1}`}>
                  {detail.description}
                </p>
              </div>
              <div className="pt-10 md:pt-16 mx-auto grid grid-cols-2 gap-x-8 gap-y-16">
                <div className="flex items-center">
                  <Image src={detail.icon1} width={40} height={40} />
                  <p className='p-2 font-bold text-slate-400 italic text-md'>{detail.icon1_name}</p>
                </div>
                <div className="flex items-center">
                  <Image src={detail.icon2} width={40} height={40} />
                  <p className='p-2 font-bold text-slate-400 italic text-md'>{detail.icon2_name}</p>
                </div> 
              </div>
            </div>
            <div  dir="rtl" className="col-span-2 pt-8 pl-8 pr-16">
              <Image
                src={detail.image1}
                className={`border-slate-300 border rounded-md ring-offset-8 ring-slate-300 ring-2 hidden md:block ${imageClass}`}
                width={5000}
                height={5000}
              />
              <Image
                src={detail.image2}
                className={`border-slate-300 border md:-mt-72 md:-mr-14 -mr-24 -mb-48 ring-offset-8 ring-slate-300 ring-2 rounded-md md:absolute ${imageClass}`}
                width={350}
                height={350}
              />
            </div>
          </div>
          <div
            className="bg-fixed bg-cover bg-center mt-28 divide-y divide-neutral-300"
            style={{ backgroundImage: bgClass }}
          >
          <div className="mt-16 py-16 mx-auto grid grid-cols-1 gap-x-8 gap-y-16 md:gap-y-32 lg:mx-0 lg:max-w-none lg:grid-cols-3 px-6">
            <p className='text-2xl font-bold col-span-1'> Screenshots </p>
            <div className='col-span-2'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10'>
                <Image src={detail.screenshot1} className={`border-slate-300 border rounded-md ${imageClass}`} width={500} height={350} />
                <Image src={detail.screenshot2} className={`border-slate-300 border rounded-md ${imageClass}`} width={500} height={350} />
                <Image src={detail.screenshot3} className={`border-slate-300 border rounded-md ${imageClass}`} width={500} height={350} />
                <Image src={detail.screenshot4} className={`border-slate-300 border rounded-md ${imageClass}`} width={500} height={350} />
              </div>
            </div>
            </div>
          
           <div className="px-6 py-20 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 md:gap-y-32 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <p className='text-2xl font-bold col-span-1'> Built for You </p>
            <div className='col-span-2'>
            <p className='text-lg text-slate-500'>{detail.developer_text}</p>
              <div className='pt-10 grid grid-cols-2 gap-y-10'>
                <p className='font-mono text-md'> {detail.tech1} </p>
                <p className='font-mono text-md'> {detail.tech2} </p>
                <p className='font-mono text-md'> {detail.tech3} </p>
                <p className='font-mono text-md'> {detail.tech4} </p>
                <p className='font-mono text-md'> {detail.tech5} </p>
              </div>
            </div>
          </div>
          </div>
        </div>  
    </div>
  );
}


import { ClipboardDocumentCheckIcon, LockClosedIcon, ServerIcon, ArrowTrendingDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../../utils/breadcrumb';
import { useRouter } from 'next/router';

const projects = [
  {
    name: 'Dashboard',
    description: 'Offer our customers the most cost-efficient, solution to satisfy their Industrial Automation needs',
    image: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dashboard_mobile.png',
    link: 'dashboard'
  },
  {
    name: 'Data Visualization',
    description: 'Build and Maintain long term mutually beneficial relationships with our customers and principals.',
    image: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/datavisualization_mobile.png',
    link: 'visualization'
  },
  {
    name: 'E-Commerce',
    description: 'Provide genuine products to help our partners achieve their goals',
    image: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/ecommerce_mobile.png',
    link: 'ecommerce'
  },
  {
    name: 'Workflow Management',
    description: 'Build and Maintain long term mutually beneficial relationships with our customers and principals.',
    image: 'https://ducaqjqbmh7lv.cloudfront.net/mysite/django_mobile.png',
    link: 'management_tool'
  },
];

  


export default function Projects() {

  const router = useRouter();
  const { name } = router.query;
  const query = router.route;
  const queryParts = query.split('/');
  const lastQueryPart = queryParts[queryParts.length - 1];

  return (
    <div className="overflow-hidden bg-white py-4 mb-20">
      <Breadcrumb crumb={{ lastQueryPart }} />
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <p className='text-4xl mx-8 my-8 md:my-14 font-sans font-thin'>Build and Maintain long term mutually beneficial relationships with our customers and principals</p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mx-4 md:mx-8 mt-8">
        {projects.map((project) => (
          <Link key={project.id} href={{ pathname: '/projects/detail', query: { name: project.link} }} passHref>
            <div className="shadow aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                src={project.image}
                width={300} height={200}
                className="object-contain object-center group-hover:opacity-75 p-2 md:p-4"
              />
            </div>
            <h3 className="mt-4 font-thin line-clamp-4 leading-5 text-base text-gray-700 font-sans md:font-serif">{project.description}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{project.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}


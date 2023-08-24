import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

export default function Breadcrumb({ crumb }) {
  const numValues = Object.keys(crumb).length;

  if (numValues === 1) {
      return (
      <div className="mt-4 ml-4 flex items-center">
        <Link href={{ pathname: '/'}} passHref>
          <HomeIcon className="mb-3 w-6"/>
        </Link>
        <ChevronRightIcon className="mb-2 p-2 w-8 h-8"/>
        <Link key={crumb.id} href={{ pathname: `${crumb.lastQueryPart}`}} passHref>
          <h6 className='p-2'>{crumb.lastQueryPart}</h6>
        </Link>
      </div>
    );
  } else if (numValues === 2) {
  	if (crumb.cart_flag === "true") {
    return (
      <div className="mt-4 ml-4 flex items-center">
        <Link href={{ pathname: '/'}} passHref>
          <HomeIcon className="mb-3 w-6"/>
        </Link>
        <ChevronRightIcon className="mb-2 p-2 w-8 h-8"/>
        <Link key={crumb.id} href={{ pathname: '/item', query: { name: crumb.name, cart_flag:"true"} }} passHref>
          <h6 className='p-2'>{crumb.name}</h6>
        </Link>
      </div>
      );
  } else {
    return (
      <div className="mt-4 ml-4 flex items-center">
        <Link href={{ pathname: '/'}} passHref>
          <HomeIcon className="mb-3 w-6"/>
        </Link>
        <ChevronRightIcon className="mb-2 p-2 w-8 h-8"/>
        <Link key={crumb.id} href={{ pathname: `viewall/${crumb.query}`}} passHref>
          <h6 className='p-2'>{crumb.query}</h6>
        </Link>
        <ChevronRightIcon className="mb-2 p-2 w-8 h-8"/>
        <Link key={crumb.id} href={{ pathname: `/${crumb.query}`, query: { name: crumb.name } }} passHref>
          <h6 className='p-2'>{crumb.name}</h6>
        </Link>
      </div>
	   );
  }} else if (numValues === 3) {
    return (
      <div className="mt-4 ml-4 flex items-center">
        <Link href={{ pathname: '/'}} passHref>
          <HomeIcon className="mb-3 w-6"/>
        </Link>
        <ChevronRightIcon className="mb-2 p-2 w-8 h-8"/>
        <Link key={crumb.id} href={{ pathname: `viewall/${crumb.filter_type}`}} passHref>
          <h6 className='p-2'>{crumb.filter_type}</h6>
        </Link>
        <ChevronRightIcon className="mb-2 p-2 w-8 h-8"/>
        <Link key={crumb.id} href={{ pathname: `/${crumb.filter_type}`, query: { name: crumb.filter_name } }} passHref>
          <h6 className='p-2'>{crumb.filter_name}</h6>
        </Link>
        <ChevronRightIcon className="mb-2 p-2 w-8 h-8"/>
        <Link key={crumb.id} href={{ pathname: '/item', query: { name: crumb.name, filter_type:crumb.filter_type, filter_name:crumb.filter_name } }} passHref>
          <h6 className='p-2'>{crumb.name}</h6>
        </Link>
      </div>
    );
  } else {
    return null; // Handle other cases or provide a default behavior
  }
}

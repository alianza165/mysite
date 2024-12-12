'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchResults } from '../../../utils/api';
import { useAppContext } from '../../context/AppContext';

// Custom components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">{children}</div>
);

const CardContent = ({ children }) => <div className="p-6">{children}</div>;

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{children}</h2>
);

const Table = ({ children }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">{children}</table>
  </div>
);

const TableHeader = ({ children }) => <thead>{children}</thead>;

const TableBody = ({ children }) => <tbody>{children}</tbody>;

const TableRow = ({ children }) => <tr>{children}</tr>;

const TableHead = ({ children }) => (
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
    {children}
  </th>
);

const TableCell = ({ children }) => (
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{children}</td>
);

export default function Results() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId');
  const { theme, isOpen } = useAppContext();

  useEffect(() => {
    if (projectId) {
      fetchResults(projectId)
        .then((res) => {
          setResults(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching results:', error);
          setError('Failed to fetch results. Please try again later.');
          setLoading(false);
        });
    }
  }, [projectId]);

  const marginLeft = isOpen ? 'md:ml-64' : 'md:ml-20';
  const themeClass = theme === 'dark' ? 'bg-black' : 'bg-white';
  const themeClass2 = theme === 'dark' ? 'text-white' : 'text-black';

  if (loading) {
    return (
      <div className={`${themeClass} ${marginLeft} transition-all duration-300 p-6 m-auto overflow-hidden mt-10 mr-8`}>
        <Card>
          <CardHeader>
            <CardTitle>Loading...</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !results) {
    return (
      <div className={`${themeClass} ${marginLeft} transition-all duration-300 p-6 m-auto overflow-hidden mt-10 mr-8`}>
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-500">{error || 'No results found.'}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`${themeClass} ${marginLeft} transition-all duration-300 p-6 m-auto overflow-hidden mt-10 mr-8`}>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Project Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Panels</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.panels.map((panel) => (
                      <TableRow key={panel.id}>
                        <TableCell>{panel.name}</TableCell>
                        <TableCell>{panel.size}</TableCell>
                        <TableCell>${panel.price.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Components</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Total Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.components.map((component) => (
                      <TableRow key={component.id}>
                        <TableCell>{component.name}</TableCell>
                        <TableCell>{component.type}</TableCell>
                        <TableCell>{component.quantity}</TableCell>
                        <TableCell>${component.total_price.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="flex justify-between items-center">
            <CardTitle>Total Price</CardTitle>
            <span className="text-2xl font-bold">${results.total_price.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

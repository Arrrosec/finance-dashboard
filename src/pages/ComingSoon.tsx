interface ComingSoonProps {
  page: string;
}

const ComingSoon = ({ page }: ComingSoonProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-700 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-4">{page} Page</h1>
      <p className="text-lg">This page is coming soon! 🚀</p>
    </div>
  );
};

export default ComingSoon;

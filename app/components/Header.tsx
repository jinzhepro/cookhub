import Link from "next/link";

interface HeaderProps {
  showBackLink?: boolean;
  logoSize?: "small" | "large";
  showSubtitle?: boolean;
}

export default function Header({
  showBackLink = false,
  logoSize = "large",
  showSubtitle = true,
}: HeaderProps) {
  const logoHeightClass = logoSize === "small" ? "h-8" : "h-20";
  const logoRoundedClass = logoSize === "small" ? "" : "rounded-2xl";

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {showBackLink && (
            <Link href="/" className="text-blue-500 hover:text-blue-700 mr-4">
              &larr; 返回首页
            </Link>
          )}
          <img
            src="/logo.png"
            alt="CookHub Logo"
            className={`${logoHeightClass} w-auto mr-3 ${logoRoundedClass}`}
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">CookHub</h1>
            {showSubtitle && (
              <p className="mt-1 text-gray-600">发现名厨的精彩菜谱</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

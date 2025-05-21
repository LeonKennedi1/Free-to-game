//src/app/page.tsx
import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Добро пожаловать - Free To Play Games</title>
        <meta
          name="description"
          content="Найдите лучшие бесплатные игры на ПК и в браузере."
        />
      </Head>

      <section className="text-center py-16 sm:py-20 md:py-28 px-4">
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8
                       text-transparent bg-clip-text bg-gradient-to-br from-sky-400 via-violet-500 to-rose-500"
        >
          Добро пожаловать в Мир Бесплатных Игр!
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Исследуйте огромную коллекцию бесплатных игр для ПК и браузера.
          Откройте для себя новые приключения, не потратив ни копейки.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6">
          <Link
            href="/games"
            className="w-full sm:w-auto inline-flex items-center justify-center 
                       bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-700
                       hover:bg-gradient-to-br 
                       text-white font-semibold py-3.5 px-10 rounded-lg shadow-lg hover:shadow-xl
                       transition-all duration-300 ease-in-out transform hover:scale-105 
                       focus:outline-none focus:ring-4 focus:ring-sky-500/50"
          >
            Смотреть все игры
          </Link>
          <Link
            href="/games/platform/pc"
            className="w-full sm:w-auto inline-flex items-center justify-center 
                       border-2 border-sky-600 text-sky-400 
                       hover:bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-700 hover:text-white font-semibold py-3.5 px-8 rounded-lg shadow-md hover:shadow-lg
                       transition-all duration-300 ease-in-out transform hover:scale-105
                       focus:outline-none focus:ring-4 focus:ring-sky-600/50"
          >
            Игры для ПК
          </Link>
        </div>
      </section>

      <section className="py-4  px-4">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16
                       text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500"
        >
          Почему выбирают нас?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "100% Бесплатно",
              description:
                "Доступ ко всем играм абсолютно бесплатный, навсегда.",
            },
            {
              title: "Огромный выбор",
              description:
                "Сотни игр различных жанров и платформ ждут вашего открытия.",
            },
            {
              title: "Простота использования",
              description:
                "Удобный поиск и фильтрация для быстрого нахождения идеальной игры.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 
                         p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-cyan-500/20
                         transform hover:-translate-y-1.5 transition-all duration-300 ease-in-out text-left"
            >
              <h3 className="text-2xl font-semibold text-sky-300 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;

import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
  {/* Logo */}
  <a
    href="#"
    className="text-lg font-semibold tracking-tight text-white"
  >
    Vincent Hon
  </a>

  {/* Navigation */}
  <div className="flex items-center gap-8 text-sm text-zinc-400">
    <a
      href="#about"
      className="transition hover:text-white"
    >
      About
    </a>

    <a
      href="#projects"
      className="transition hover:text-white"
    >
      Projects
    </a>

    <a
      href="#skills"
      className="transition hover:text-white"
    >
      Skills
    </a>

    <a
      href="#contact"
      className="transition hover:text-white"
    >
      Contact
    </a>

    <a
      href="/projects/cv/Vincent_Hon-CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-4 rounded-full border border-zinc-700 px-5 py-2.5 text-sm text-white transition hover:border-zinc-500"
    >
      Resume 
    </a>
  </div>
</nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6">
        <p className="mb-5 text-sm font-medium tracking-[0.2em] text-zinc-500">
          BINUS UNIVERSITY · COMPUTER SCIENCE
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          Hi, I&apos;m{" "}
          <span className="text-zinc-500">Vincent.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
          I&apos;m a Computer Science student at BINUS University
          interested in software development, AI, and building practical technology through hands-on projects.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-800 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-600"
          >
            Contact Me
          </a>
        </div>
      </section>

{/* About */}
<section
  id="about"
  className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24"
>
  <p className="mb-4 text-sm tracking-[0.2em] text-zinc-500">
    ABOUT ME
  </p>

  <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
    {/* Left */}
    <div>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
        Computer Science student building practical technology.
      </h2>

      <div className="mt-8 max-w-2xl space-y-4 text-lg leading-8 text-zinc-400">
        <p>
          I&apos;m a Computer Science student at BINUS University who
          enjoys turning ideas into working projects. My interests
          include software development, artificial intelligence,
          computer vision, mobile development, and IoT.
        </p>

        <p>
          Through university projects and independent development,
          I&apos;m continuously improving my programming,
          problem-solving, and software engineering skills.
        </p>
      </div>
    </div>

    {/* Right */}
    <div className="lg:border-l lg:border-zinc-900 lg:pl-10">
      <div>
        <p className="text-sm tracking-[0.15em] text-zinc-600">
          EDUCATION
        </p>

        <h3 className="mt-4 text-xl font-semibold">
          BINUS University
        </h3>

        <p className="mt-2 text-zinc-400">
          Bachelor of Computer Science
        </p>

        <p className="mt-1 text-sm text-zinc-600">
          2024 — Present
        </p>
      </div>

      <div className="mt-10">
        <p className="text-sm tracking-[0.15em] text-zinc-600">
          FOCUS
        </p>

        <div className="mt-4 space-y-3 text-zinc-300">
          <p>Software Development</p>
          <p>Artificial Intelligence</p>
          <p>Computer Vision</p>
          <p>Mobile Development</p>
          <p>IoT</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projects */}
<section
  id="projects"
  className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24"
>
  <p className="mb-4 text-sm tracking-[0.2em] text-zinc-500">
    SELECTED WORK
  </p>

  <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-5xl">
    Projects
  </h2>

  <div className="grid gap-5 sm:grid-cols-2">

    {/* Project 1 — ExpenseTracker */}
    <article className="group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 transition hover:-translate-y-1 hover:border-zinc-700">
      <Link href="/projects/expense-tracker" className="block">
        <div className="flex aspect-video items-end bg-zinc-900 p-6">
        <span className="text-xs tracking-[0.2em] text-zinc-600">
          JAVA · SPRING BOOT · POSTGRESQL
        </span>
      </div>
      </Link>

      <div className="p-8">
        <p className="mb-8 text-sm text-zinc-600">01</p>

        <Link href="/projects/expense-tracker">
          <h3 className="text-2xl font-semibold transition group-hover:text-zinc-300">
            Expense Tracker API
          </h3>
        </Link>

        <p className="mt-4 leading-7 text-zinc-400">
          A RESTful expense management API built with Spring Boot,
          featuring authentication, expense management, categories,
          and monthly summaries.
        </p>

        <p className="mt-6 text-sm text-zinc-500">
          Java · Spring Boot · PostgreSQL · JWT · JPA
        </p>

        <a
          href="https://github.com/VinVinn16/expense-tracker-api"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm font-medium text-white transition group-hover:text-zinc-400"
        >
          View GitHub ↗
        </a>
      </div>
    </article>

    {/* Project 2 — CNN */}
    <article className="group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 transition hover:-translate-y-1 hover:border-zinc-700">
      <Link href="/projects/cnn" className="block">
        <div className="flex aspect-video items-end bg-zinc-900 p-6">
          <span className="text-xs tracking-[0.2em] text-zinc-600">
              PYTHON · TENSORFLOW · COMPUTER VISION
          </span>
        </div>
      </Link>

      <div className="p-8">
        <p className="mb-8 text-sm text-zinc-600">02</p>

        <Link href="/projects/cnn">
          <h3 className="text-2xl font-semibold transition group-hover:text-zinc-300">
            CNN Sign Language Recognition
          </h3>
        </Link>

        <p className="mt-4 leading-7 text-zinc-400">
          Developed a Convolutional Neural Network model to recognize
          American Sign Language (ASL) hand gestures from image data.
        </p>

        <p className="mt-6 text-sm text-zinc-500">
          Python · TensorFlow · Keras · OpenCV · NumPy
        </p>

        <p className="mt-4 text-sm text-zinc-600">
          ~97% Validation Accuracy · F1 Score &gt; 0.99
        </p>
      </div>
    </article>

    {/* Project 3 — RC Car */}
<article className="group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 transition hover:-translate-y-1 hover:border-zinc-700">
      <Link href="/projects/rc-car" className="block">
        <div className="aspect-video overflow-hidden bg-zinc-900">
          <img
            src="/projects/RCCAR/rccar-collage.png"
            alt="RC Car Controller project"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-8">
        <p className="mb-8 text-sm text-zinc-600">03</p>

        <Link href="/projects/rc-car">
          <h3 className="text-2xl font-semibold transition group-hover:text-zinc-300">
            RC Car Controller
          </h3>
        </Link>

        <p className="mt-4 leading-7 text-zinc-400">
          An Android application for controlling an RC car through
          Bluetooth communication.
        </p>

        <p className="mt-6 text-sm text-zinc-500">
          Kotlin · Android · Bluetooth · Arduino
        </p>

        <a
          href="https://github.com/VinVinn16/RC-CAR_Controler"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm font-medium text-white transition group-hover:text-zinc-400"
        >
          View GitHub ↗
        </a>
      </div>
    </article>

    {/* Project 4 — Spark Orbit */}
   <article className="group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 transition hover:-translate-y-1 hover:border-zinc-700">
      <Link href="/projects/spark-orbit" className="block">
        <div className="aspect-video overflow-hidden bg-zinc-900">
          <img
            src="/projects/Spark-Orbit/SparkOrbit.png"
            alt="Spark-Orbit AR project"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-8">
        <p className="mb-8 text-sm text-zinc-600">04</p>

        <Link href="/projects/spark-orbit">
          <h3 className="text-2xl font-semibold transition group-hover:text-zinc-300">
            Spark-Orbit AR
          </h3>
        </Link>

        <p className="mt-4 leading-7 text-zinc-400">
          Interactive Augmented Reality educational application built
          with Unity and Vuforia Engine.
        </p>

        <p className="mt-6 text-sm text-zinc-500">
          C# · Unity · Vuforia Engine · AR
        </p>

        <a
          href="https://github.com/devrentt/Spark-Orbit"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm font-medium text-white transition group-hover:text-zinc-400"
        >
          View GitHub ↗
        </a>
      </div>
    </article>

    {/* Project 5 — Smart Cane */}
    <article className="group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 transition hover:-translate-y-1 hover:border-zinc-700">
      <Link href="/projects/smart-cane" className="block">
        <div className="flex aspect-video items-end bg-zinc-900 p-6">
          <span className="text-xs tracking-[0.2em] text-zinc-600">
             ARDUINO · IOT · SENSORS
          </span>
        </div>
      </Link>

      <div className="p-8">
        <p className="mb-8 text-sm text-zinc-600">05</p>

        <Link href="/projects/smart-cane">
          <h3 className="text-2xl font-semibold transition group-hover:text-zinc-300">
            Smart Cane
          </h3>
        </Link>

        <p className="mt-4 leading-7 text-zinc-400">
          An IoT-based assistive technology project designed to
          improve obstacle detection and mobility support.
        </p>

        <p className="mt-6 text-sm text-zinc-500">
          Arduino · IoT · Sensors
        </p>

        <a
          href="https://github.com/bebret/PKM-KC-"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm font-medium text-white transition group-hover:text-zinc-400"
        >
          View GitHub ↗
        </a>
      </div>
    </article>

  </div>
</section>

      {/* Skills */}
      {/* Skills */}
<section
  id="skills"
  className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24"
>
  <p className="mb-4 text-sm tracking-[0.2em] text-zinc-500">
    SKILLS
  </p>

  <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-5xl">
    Technologies I work with.
  </h2>

  <div className="grid gap-5 sm:grid-cols-2">

    {/* Programming */}
    <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-7">
      <p className="text-sm tracking-[0.15em] text-zinc-600">
        PROGRAMMING
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["C++", "Python", "Java", "SQL", "TypeScript",].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Software Development */}
    <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-7">
      <p className="text-sm tracking-[0.15em] text-zinc-600">
        SOFTWARE DEVELOPMENT
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {[
          "Git & GitHub",
          "Android Studio",
          "Spring Boot",
          "REST API",
          "MySQL",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* AI / Computer Vision */}
    <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-7">
      <p className="text-sm tracking-[0.15em] text-zinc-600">
        AI / COMPUTER VISION
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {[
          "Keras",
          "OpenCV",
          "NumPy",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Hardware / IoT */}
    <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-7">
      <p className="text-sm tracking-[0.15em] text-zinc-600">
        HARDWARE / IOT
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {[
          "Arduino",
          "Bluetooth",
          "Sensors",
          "IoT",``
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* Soft Skills */}
       <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-7">
  <p className="text-sm tracking-[0.15em] text-zinc-600">
    SOFT SKILLS
  </p>

  <div className="mt-5 flex flex-wrap gap-2">
    {[
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Adaptability",
      "Time Management",
    ].map((skill) => (
      <span
        key={skill}
        className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
      >
        {skill}
      </span>
    ))}
  </div>
</div> 

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 text-sm tracking-[0.2em] text-zinc-500">
          CONTACT
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s connect.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          I&apos;m currently open to internship opportunities and
          collaborations.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vvvincent16@gmail.com"
            target="_blank"
            rel='noopener noreferrer'
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Email
          </a>
          
          <a 
            href="mailto:vincent.hon@binus.ac.id"
            className="rounded-full border border-zinc-800 px-6 py-3 text-sm font medium text-white transition hover:border-zinc-600"
            >
              Outlook
            </a>

          <a
            href="https://github.com/VinVinn16"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-800 px-6 py-3 text-sm font-medium text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vincent-hon1116/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-800 px-6 py-3 text-sm font-medium text-white"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-8">
        <p className="text-sm text-zinc-600">
          Vincent Hon <br></br>
          Computer Science @ BINUS University
          <br></br>

          © 2026 Vincent Hon
        </p>
      </footer>
    </main>
  );
}
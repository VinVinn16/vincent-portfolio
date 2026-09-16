import Link from "next/link";

const projects = {
  "expense-tracker": {
    title: "Expense Tracker API",
    category: "Backend Development",
    description:
      "A RESTful expense management API designed to manage personal expenses and financial records.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "JPA"],
    image: "/projects/Expense-Tracker/main.png",
    github: "https://github.com/VinVinn16/expense-tracker-api",
  },

  cnn: {
    title: "CNN Sign Language Recognition",
    category: "AI / Computer Vision",
    description:
      "A Convolutional Neural Network model developed to recognize American Sign Language hand gestures from image data.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "NumPy",
    ],
    image: "/projects/CNN/main.png",
    github: null,
  },

  "rc-car": {
    title: "RC Car Controller",
    category: "Mobile + Hardware",
    description:
      "An Android application for controlling an RC car through Bluetooth communication.",
    technologies: [
      "Kotlin",
      "Android",
      "Bluetooth",
      "Arduino",
    ],
    image: "/projects/RCCAR/rccar-collage.png",
    github: "https://github.com/VinVinn16/RC-CAR_Controler",
  },

  "spark-orbit": {
    title: "Spark-Orbit AR",
    category: "Augmented Reality",
    description:
      "An augmented reality project exploring interactive experiences with emerging technology.",
    technologies: ["AR", "Mobile Development", "Emerging Technology"],
    image: "/projects/Spark-Orbit/SparkOrbit.png",
    github:"https://github.com/devrentt/Spark-Orbit",
  },

  "smart-cane": {
    title: "Smart Cane",
    category: "IoT",
    description:
      "An IoT-based assistive technology project designed for obstacle detection and mobility support.",
    technologies: ["Arduino", "IoT", "Sensors"],
    image: "/projects/Smart-Cane/main.png",
    github: "https://github.com/bebret/PKM-KC-",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">
            Project not found
          </h1>

          <Link
            href="/#projects"
            className="mt-6 inline-block text-zinc-400 transition hover:text-white"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* Back */}
        <Link
          href="/#projects"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <section className="mt-16">
          <p className="text-sm tracking-[0.2em] text-zinc-500">
            {project.category.toUpperCase()}
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {project.description}
          </p>
        </section>

        {/* Image */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950">
          <img
            src={project.image}
            alt={project.title}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Details */}
        <section className="mt-16 grid gap-16 lg:grid-cols-[1fr_300px]">

          <div>
            <h2 className="text-2xl font-semibold">
              Overview
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
                The RC Car Controller combines an Android application
                with an Arduino-based RC car. The application communicates
                with the vehicle through Bluetooth, allowing users to
                control the car remotely from a mobile device.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Technologies
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

        </section>

        {/* Links */}
        <section className="mt-16 border-t border-zinc-900 pt-10">
          <div className="flex flex-wrap gap-4">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                View GitHub ↗
              </a>
            )}

            <Link
              href="/#projects"
              className="rounded-full border border-zinc-800 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-600"
            >
              Back to Projects
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}
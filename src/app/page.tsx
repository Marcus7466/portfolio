/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getJSONData } from "@/lib/serverUtils";
import { withBasePath } from "@/lib/utils";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GlobeIcon,
  MobileIcon,
  DrawingPinIcon,
} from "@radix-ui/react-icons";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default async function Home() {
  const data = await getJSONData();
  const sections = data.visual.home.sections;

  return (
    <main>
      {/* Banner Section */}
      {sections.banner && (
        <section
          id="home"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="w-1/2 mx-auto lg:w-1/3">
              <Image
                src={withBasePath("/assets/profile.jpg")}
                width={280}
                height={280}
                alt="Developer"
                className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full"
              />
            </div>
            <div className="w-full lg:w-2/3 space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
                  Bonjour 👋, je suis {data.personalInfo.name}
                </h1>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                  {data.personalInfo.title} — {data.personalInfo.location}
                </p>
              </div>
              <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
                {data.personalInfo.bio}
              </p>
              <div className="space-x-4">
                <Link
                  href={data.contactInfo.github}
                  prefetch={false}
                >
                  <Button variant="secondary" size="icon">
                    <GitHubLogoIcon className="h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href={data.contactInfo.twitter}
                  prefetch={false}
                >
                  <Button variant="secondary" size="icon">
                    <TwitterLogoIcon className="h-4 w-4" />
                  </Button>
                </Link>

                <Link
                  href={data.contactInfo.linkedin}
                  prefetch={false}
                >
                  <Button variant="secondary" size="icon">
                    <LinkedInLogoIcon className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href={`mailto:${data.contactInfo.email}`}>
                  <Button variant="secondary" size="icon">
                    <EnvelopeClosedIcon className="h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href={data.contactInfo.website}
                  prefetch={false}
                >
                  <Button variant="secondary" size="icon">
                    <GlobeIcon className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {sections.experience && (
        <section
          id="experience"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">
            Expérience professionnelle
          </h2>
          <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
            {data.workExperience.map((exp) => (
              <div key={exp.id} className="grid gap-1 relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

                <h4 className="text-xl font-medium">
                  {exp.role} @
                  <Link
                    href={exp.companyWebsite}
                    className="ml-2 text-primary"
                  >
                    {exp.company}
                  </Link>
                </h4>
                <div className="text-gray-500 dark:text-gray-400">
                  {exp.startDate} - {exp.endDate}
                </div>
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="mt-2">
                  <h6 className="font-medium">Responsabilités :</h6>
                  <ul className="text-gray-500 text-sm list-disc pl-4">
                    {exp.keyResponsibilities.map((resp) => (
                      <li key={resp}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      <section
        id="skills"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Compétences</h2>
        <div className="grid gap-6">
          {data.skills.frameworks.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {data.skills.frameworks.map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {data.skills.tools.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Domaines</h4>
              <div className="flex flex-wrap gap-2">
                {data.skills.tools.map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {data.hobbies.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Centres d&apos;intérêt</h4>
              <div className="flex flex-wrap gap-2">
                {data.hobbies.map((h) => (
                  <Badge key={h} variant="outline">
                    {h}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Education Section */}
      {sections.education && (
        <section
          id="education"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">Formation</h2>
          <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
            {data.education.map((ed) => (
              <div key={ed.id} className="grid gap-1 relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

                <h4 className="text-xl font-medium">{ed.degree}</h4>
                <h5 className="font-medium">{ed.institution}</h5>
                <div className="text-gray-500 dark:text-gray-400">
                  {ed.startDate} - {ed.endDate}
                </div>
                {ed.description && (
                  <p className="mt-2 text-sm text-gray-500">{ed.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {sections.testimonial && (
        <section
          id="testimonials"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">Témoignages</h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {data.testimonials.map((t) => (
              <Card className="p-6 text-left" key={t.id}>
                <blockquote className="font-medium lg:text-og">
                  &ldquo;{t.feedback}.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <Avatar>
                    <Image
                      height={50}
                      width={50}
                      alt="testimonial avatar"
                      src={withBasePath(t.avatar)}
                    />
                  </Avatar>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {t.title} @ {t.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Projects Section */}
      {sections.project && (
        <section
          id="projects"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">Projets réalisés</h2>
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            {data.projects.map((project) => (
              <Card key={project.title} className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/3 p-2 flex items-center">
                  <Image
                    src={withBasePath(project.cover)}
                    alt={project.title}
                    height={200}
                    width={300}
                    className="rounded-md object-cover"
                  />
                </div>

                <div className="w-full lg:w-2/3">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <div className="flex space-x-3">
                      <Link
                        href={project.live_url}
                        prefetch={false}
                      >
                        <Button size="sm">
                          <GlobeIcon className="h-3 w-3 mr-2" />
                          Démo
                        </Button>
                      </Link>
                      <Link
                        href={project.code_repo_url}
                        prefetch={false}
                      >
                        <Button size="sm" variant="outline">
                          <GitHubLogoIcon className="h-3 w-3 mr-2" />
                          Code source
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      {sections.contact && (
        <section
          id="contact"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Me contacter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <EnvelopeClosedIcon className="h-5 w-5 text-gray-500" />
                  <Link
                    href={`mailto:${data.contactInfo.email}`}
                    className="text-primary"
                  >
                    {data.contactInfo.email}
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <MobileIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-500 dark:text-gray-400">
                    {data.contactInfo.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <DrawingPinIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-500 dark:text-gray-400">
                    {data.personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <GlobeIcon className="h-5 w-5 text-gray-500" />
                  <Link
                    href={data.contactInfo.website}
                    prefetch={false}
                    className="text-primary"
                  >
                    {data.contactInfo.website}
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="p-6">
              <CardHeader>
                <CardTitle>Réseaux sociaux</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Link href={data.contactInfo.github} prefetch={false}>
                    <Button variant="secondary" size="icon">
                      <GitHubLogoIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={data.contactInfo.twitter} prefetch={false}>
                    <Button variant="secondary" size="icon">
                      <TwitterLogoIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={data.contactInfo.linkedin} prefetch={false}>
                    <Button variant="secondary" size="icon">
                      <LinkedInLogoIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`mailto:${data.contactInfo.email}`}>
                    <Button variant="secondary" size="icon">
                      <EnvelopeClosedIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={data.contactInfo.website} prefetch={false}>
                    <Button variant="secondary" size="icon">
                      <GlobeIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </section>
      )}
    </main>
  );
}

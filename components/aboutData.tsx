import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const TAB_DATA = [
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-2">
        <li>
          <Link href="/Mern.jpg" className="flex items-center space-x-2 group">
            <Badge variant="outline" className="transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              MERN Stack
            </Badge>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">Udemy</span>
          </Link>
        </li>
        <li>
          <Link href="/python.pdf" className="flex items-center space-x-2 group">
            <Badge variant="outline" className="transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              Python Flask with HTML 5
            </Badge>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">Udemy</span>
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <Badge variant="outline">Deep Learning</Badge>
          <span className="text-muted-foreground">Coursera</span>
        </li>
        <li>
          <Link href="/fundamentals.pdf" className="flex items-center space-x-2 group">
            <Badge variant="outline" className="transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              Programming Fundamentals
            </Badge>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">Udacity</span>
          </Link>
        </li>
        <li>
          <Link href="/debugging.pdf" className="flex items-center space-x-2 group">
            <Badge variant="outline" className="transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              Debugging
            </Badge>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">Udemy</span>
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <Badge variant="outline">Front-end Development</Badge>
          <span className="text-muted-foreground">FreeCodeCamp</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-2">
        <li className="flex items-center justify-between">
          <span className="font-medium">Addis Ababa University</span>
          <Badge>Computer Science</Badge>
        </li>
        <li className="flex items-center justify-between">
          <span className="font-medium">Coursera</span>
          <Badge>Various Online Courses</Badge>
        </li>
        <li className="flex items-center justify-between">
          <span className="font-medium">YouTube Academy</span>
          <Badge>Self-paced Learning</Badge>
        </li>
      </ul>
    ),
  },
]


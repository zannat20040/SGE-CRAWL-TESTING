export interface Destination {
  destinationName: string;
  destinationFlag: string;
  destinationDescription: string;
  whyStudyDescription: string;
  quickFacts: string[];
  scholarship: string[];
  programDuration: Array<{
    qualification: string;
    duration: string;
    gir: string;
  }>;
  postGraduationOpportunity: Array<{
    qualification: string;
    duration: string;
  }>;
  costOfStudy: Array<{
    degree: string;
    cost: string;
  }>;
  academicIntake: Array<{
    qualification: string;
    duration: string;
  }>;
  preparationTime: string;
  popularIn: string[];
  topUniversity: Array<{
    img: string;
    name: string;
    desc: string;
    location: string;
    rank: string;
    subtitle: string;
    established: string;
    history: string;
    achievement: string;
    service: string;
    faculty: string;
    accommodation: string;
    fees: string;
    internationalFees: string;
    internationalStudent: string;
    courseList: string[];
  }>;
  studyRequirement: Array<{
    title: string;
    description: string;
    img: string;
  }>;
  examRequirement: Array<{
    examName: string;
    requirementList: string[];
  }>;
  documents: {
    description: string;
    list: string[];
  };
  statement: {
    description: string;
    list: string[];
  };
  application: {
    description: string;
    list: string[];
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  expertNumber: string;
  url: string;
  pageTitle: string;
  meta: string;
  bgColor: string;
  __v: number;
  _id: string;
}

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('b25606c3-3094-408c-85bb-c8d6f42395e1', '1Laney.Bernier@yahoo.com', 'William Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv78901', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('70fad4a1-a2bc-4f64-bd43-d17a394249b1', '8Makayla.Kirlin60@gmail.com', 'William Brown', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv67890', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('510450b2-962f-4bc8-a29f-2099927d511f', '15Shyann_Sanford50@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=17', 'inv12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('9d1fa4ed-998b-4cd0-8594-5f852f4ddb60', '22Allan.Olson97@yahoo.com', 'William Brown', 'https://i.imgur.com/YfJQV5z.png?id=24', 'inv12345', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('5bc956c6-e1d9-42be-a834-162ed2da8318', '29Jaunita.Botsford68@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv12345', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('42b62468-fdc5-4d2f-acee-b01a9390f938', '43Krystina_Stamm99@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv67890', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('e0a71fcf-1169-452c-808b-2bd37ec5ee36', '50Eleazar16@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv78901', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('c087c2c5-5b6f-404b-979a-7498f05a6488', '57Gilberto.Tromp@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('080553cd-6ef2-4da9-b0b4-e38b390eaa7d', '64Liam_Larkin@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv78901', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('a500efe8-8f57-4a70-bf2b-1cd554fb9d58', 'RV11223', '{"bellicus":"clibanus","conduco":"astrum","velit":"thesaurus","theologus":"deripio","dolores":"patruus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('717cf4b0-fe09-4c74-bed1-29ae772ce820', 'RV11223', '{"advenio":"conventus","tego":"deficio","curo":"tempus","atrox":"adhaero"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('b6ef11c1-4ed9-424c-aa03-e34ede9dd231', 'RV11223', '{"sublime":"denego","dolores":"vulgus","convoco":"coniecto"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('9432f85e-50bc-4759-956c-1cfe2d236417', 'RV54321', '{"comptus":"vado","verbum":"amissio","celer":"validus","cattus":"rerum"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('08dbba2a-4bf4-469c-bf70-1e31e0e643f1', 'RV54321', '{"quaerat":"suscipio","denego":"thesaurus","valeo":"adfectus","tenetur":"varius"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('eb297248-0bca-42b7-b97a-37f8c875ca50', 'RV09876', '{"tenus":"amplitudo","supplanto":"tui","sopor":"esse"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('5fa4edc0-9f94-49a6-9768-8f10dfbcb2d2', 'RV67890', '{"ab":"subnecto","caute":"collum","angelus":"coaegresco"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('3e66cf65-2456-4c7c-aa65-1db9e14fb5a8', 'RV09876', '{"conduco":"temptatio","deleniti":"cavus","alioqui":"super","appositus":"aperiam","ambitus":"odio"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('0a4b38ed-40f9-4558-9935-f0b72e96340a', 'RV12345', '{"umquam":"carcer","virtus":"carcer","triduana":"deleniti","culpo":"cursim","demo":"carpo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('8e37d089-8388-448b-a0cb-75933ec68561', 'RV09876', '{"ea":"ulterius","amiculum":"urbs","adhaero":"vicinus","aptus":"curis"}'::jsonb);

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('c97b2db4-054d-4b94-8aeb-ba9e46edbbfb', 'Maple Leaf International School', 'https://i.imgur.com/YfJQV5z.png?id=102');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('781c7855-857a-49c9-a8bf-a4050bc05341', 'Bright Future Academy', 'https://i.imgur.com/YfJQV5z.png?id=105');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('9bf339f7-4479-4068-9a98-e4eb823a2d68', 'Sunrise Coaching Center', 'https://i.imgur.com/YfJQV5z.png?id=108');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('440375a6-2568-40c1-904d-11bbe74cf14f', 'Maple Leaf International School', 'https://i.imgur.com/YfJQV5z.png?id=111');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('195e5cff-530e-4c84-b012-8fee87beb82f', 'Harmony Learning Institute', 'https://i.imgur.com/YfJQV5z.png?id=114');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('f6722fde-b863-4cb4-9fac-fdab4d288133', 'Maple Leaf International School', 'https://i.imgur.com/YfJQV5z.png?id=117');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('7afd37bc-4c32-4506-a548-f9db05645c9b', 'Harmony Learning Institute', 'https://i.imgur.com/YfJQV5z.png?id=120');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('9919227a-bc36-4811-8b5a-4a6ecaa804e2', 'Harmony Learning Institute', 'https://i.imgur.com/YfJQV5z.png?id=123');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('04a0ebad-dd5a-415c-b998-21c09ea8b814', 'Harmony Learning Institute', 'https://i.imgur.com/YfJQV5z.png?id=126');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('248ba83b-1701-444e-904d-771cf3f935e4', 'Greenwood High School', 'https://i.imgur.com/YfJQV5z.png?id=129');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('7237de74-0962-4b71-8e74-076042f0814d', 'Librarian', '9d1fa4ed-998b-4cd0-8594-5f852f4ddb60', '440375a6-2568-40c1-904d-11bbe74cf14f');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('9d7b0721-702f-4ed5-ae74-e0e007014044', 'Principal', '080553cd-6ef2-4da9-b0b4-e38b390eaa7d', 'f6722fde-b863-4cb4-9fac-fdab4d288133');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('236b739a-7ed3-4e7a-9142-45f29c76db22', 'Counselor', 'e0a71fcf-1169-452c-808b-2bd37ec5ee36', '7afd37bc-4c32-4506-a548-f9db05645c9b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('15d6308c-8081-4f93-a029-b4b0e875af11', 'Librarian', 'e0a71fcf-1169-452c-808b-2bd37ec5ee36', '7afd37bc-4c32-4506-a548-f9db05645c9b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('cd6879ca-71fc-431b-bd2d-de0ba5f51609', 'Principal', '510450b2-962f-4bc8-a29f-2099927d511f', 'f6722fde-b863-4cb4-9fac-fdab4d288133');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f7b7eb55-b421-4d30-9a0d-fb4f02b764aa', 'Counselor', '5bc956c6-e1d9-42be-a834-162ed2da8318', '248ba83b-1701-444e-904d-771cf3f935e4');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f98ed448-2301-4942-a4a4-1b505eed9675', 'Teacher', '42b62468-fdc5-4d2f-acee-b01a9390f938', '7afd37bc-4c32-4506-a548-f9db05645c9b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('479646be-7a55-46aa-900b-5c5f39b2fba4', 'Principal', 'e0a71fcf-1169-452c-808b-2bd37ec5ee36', '781c7855-857a-49c9-a8bf-a4050bc05341');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('6839d4e9-f665-498b-848d-2474080b30c5', 'Librarian', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '248ba83b-1701-444e-904d-771cf3f935e4');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('5a6d1712-26b9-47a8-83a7-ebb81525e5be', 'Librarian', 'c087c2c5-5b6f-404b-979a-7498f05a6488', '7afd37bc-4c32-4506-a548-f9db05645c9b');

INSERT INTO "Student" ("id", "studentIdCard", "gradeLevel", "userId", "organizationId") VALUES ('20704652-a61b-41f3-bcf6-b30b2ce3be99', 'ID12345', 'Grade 5', 'b25606c3-3094-408c-85bb-c8d6f42395e1', '9bf339f7-4479-4068-9a98-e4eb823a2d68');
INSERT INTO "Student" ("id", "studentIdCard", "gradeLevel", "userId", "organizationId") VALUES ('2a0ebdd1-61c6-4ff8-aa4c-5de828941298', 'ID67890', 'Grade 5', 'c087c2c5-5b6f-404b-979a-7498f05a6488', '248ba83b-1701-444e-904d-771cf3f935e4');
INSERT INTO "Student" ("id", "studentIdCard", "gradeLevel", "userId", "organizationId") VALUES ('4c6e1d13-11db-4fae-80e4-ac93b2b43daf', 'ID67890', 'Grade 1', '42b62468-fdc5-4d2f-acee-b01a9390f938', '7afd37bc-4c32-4506-a548-f9db05645c9b');
INSERT INTO "Student" ("id", "studentIdCard", "gradeLevel", "userId", "organizationId") VALUES ('d9b3787e-cb48-42fa-b6ef-470f27e8ddfd', 'ID54321', 'Grade 1', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '9919227a-bc36-4811-8b5a-4a6ecaa804e2');
INSERT INTO "Student" ("id", "studentIdCard", "gradeLevel", "userId", "organizationId") VALUES ('df3277e0-b0a6-4589-b0e0-2a10e6eeef0e', 'ID54321', 'Grade 4', '5bc956c6-e1d9-42be-a834-162ed2da8318', '04a0ebad-dd5a-415c-b998-21c09ea8b814');
INSERT INTO "Student" ("id", "studentIdCard", "gradeLevel", "userId", "organizationId") VALUES ('40f677bd-b671-449c-8020-e4faacb606cb', 'ID12345', 'Grade 2', '510450b2-962f-4bc8-a29f-2099927d511f', '781c7855-857a-49c9-a8bf-a4050bc05341');
INSERT INTO "Student" ("id", "studentIdCard", "gradeLevel", "userId", "organizationId") VALUES ('5c9ac633-ed9b-49ca-8a54-7e64809952b4', 'ID11223', 'Grade 2', '5bc956c6-e1d9-42be-a834-162ed2da8318', '9919227a-bc36-4811-8b5a-4a6ecaa804e2');
INSERT INTO "Student" ("id", "studentIdCard", "gradeLevel", "userId", "organizationId") VALUES ('11b28fa5-6b40-49ee-b8fb-609e34501f91', 'ID09876', 'Grade 4', '42b62468-fdc5-4d2f-acee-b01a9390f938', '195e5cff-530e-4c84-b012-8fee87beb82f');
INSERT INTO "Student" ("id", "studentIdCard", "gradeLevel", "userId", "organizationId") VALUES ('fec0cc38-b577-415c-bc39-b4bf9448b42d', 'ID67890', 'Grade 1', '080553cd-6ef2-4da9-b0b4-e38b390eaa7d', '7afd37bc-4c32-4506-a548-f9db05645c9b');
INSERT INTO "Student" ("id", "studentIdCard", "gradeLevel", "userId", "organizationId") VALUES ('1f5ea0d1-6290-4274-8610-e2adfbbdbcb3', 'ID54321', 'Grade 5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '04a0ebad-dd5a-415c-b998-21c09ea8b814');

INSERT INTO "Teacher" ("id", "subjectSpecialization", "payrollDetails", "userId", "organizationId") VALUES ('08e0e3a2-973e-43b0-b8d0-760b0c9424d2', 'Physics', 'Basic 3300 Bonus 350 Deductions 250', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '7afd37bc-4c32-4506-a548-f9db05645c9b');
INSERT INTO "Teacher" ("id", "subjectSpecialization", "payrollDetails", "userId", "organizationId") VALUES ('119fafe6-71c2-4abf-9a31-8a5eaa0193d7', 'Chemistry', 'Basic 3100 Bonus 400 Deductions 100', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '9bf339f7-4479-4068-9a98-e4eb823a2d68');
INSERT INTO "Teacher" ("id", "subjectSpecialization", "payrollDetails", "userId", "organizationId") VALUES ('7bf48fd4-f494-4fe9-8fbb-49279619a9b0', 'Mathematics', 'Basic 3000 Bonus 500 Deductions 200', '5bc956c6-e1d9-42be-a834-162ed2da8318', '781c7855-857a-49c9-a8bf-a4050bc05341');
INSERT INTO "Teacher" ("id", "subjectSpecialization", "payrollDetails", "userId", "organizationId") VALUES ('d93cf06b-7d45-4a44-bd85-c97b4c4eac09', 'Physics', 'Basic 3000 Bonus 500 Deductions 200', '42b62468-fdc5-4d2f-acee-b01a9390f938', 'f6722fde-b863-4cb4-9fac-fdab4d288133');
INSERT INTO "Teacher" ("id", "subjectSpecialization", "payrollDetails", "userId", "organizationId") VALUES ('0e2099fd-9152-4cb1-87cd-3df0876dfb12', 'English Literature', 'Basic 3400 Bonus 300 Deductions 180', '70fad4a1-a2bc-4f64-bd43-d17a394249b1', 'f6722fde-b863-4cb4-9fac-fdab4d288133');
INSERT INTO "Teacher" ("id", "subjectSpecialization", "payrollDetails", "userId", "organizationId") VALUES ('fff2dc2d-2c97-4db4-b3f1-c1917d32c804', 'English Literature', 'Basic 3200 Bonus 450 Deductions 150', '080553cd-6ef2-4da9-b0b4-e38b390eaa7d', 'c97b2db4-054d-4b94-8aeb-ba9e46edbbfb');
INSERT INTO "Teacher" ("id", "subjectSpecialization", "payrollDetails", "userId", "organizationId") VALUES ('3bb66a69-8afc-42ad-b7f9-c68c9ffc2d91', 'Mathematics', 'Basic 3400 Bonus 300 Deductions 180', '080553cd-6ef2-4da9-b0b4-e38b390eaa7d', '9919227a-bc36-4811-8b5a-4a6ecaa804e2');
INSERT INTO "Teacher" ("id", "subjectSpecialization", "payrollDetails", "userId", "organizationId") VALUES ('a0d22e7c-ec3a-4f4c-a029-8712ba6b0c1c', 'Chemistry', 'Basic 3100 Bonus 400 Deductions 100', '9d1fa4ed-998b-4cd0-8594-5f852f4ddb60', '7afd37bc-4c32-4506-a548-f9db05645c9b');
INSERT INTO "Teacher" ("id", "subjectSpecialization", "payrollDetails", "userId", "organizationId") VALUES ('668ff3e8-d4cf-4f11-aca0-eaf2599669aa', 'Chemistry', 'Basic 3300 Bonus 350 Deductions 250', 'b25606c3-3094-408c-85bb-c8d6f42395e1', '195e5cff-530e-4c84-b012-8fee87beb82f');
INSERT INTO "Teacher" ("id", "subjectSpecialization", "payrollDetails", "userId", "organizationId") VALUES ('a4a85ca2-8a38-43ea-8624-0918590074eb', 'Physics', 'Basic 3400 Bonus 300 Deductions 180', 'b25606c3-3094-408c-85bb-c8d6f42395e1', '9919227a-bc36-4811-8b5a-4a6ecaa804e2');

INSERT INTO "ClassData" ("id", "name", "timetable", "organizationId") VALUES ('82214dfe-55db-4aae-a3e2-a4a4c9d81354', 'Biology 401', 'TueThu 11001230', '9bf339f7-4479-4068-9a98-e4eb823a2d68');
INSERT INTO "ClassData" ("id", "name", "timetable", "organizationId") VALUES ('284b5252-47fb-42c4-9f62-9166ce0e59c5', 'History 501', 'TueThu 14001530', '781c7855-857a-49c9-a8bf-a4050bc05341');
INSERT INTO "ClassData" ("id", "name", "timetable", "organizationId") VALUES ('39e3fdac-f17f-4f88-95c9-742986fb2cb2', 'Chemistry 301', 'MonWed 09001030', '440375a6-2568-40c1-904d-11bbe74cf14f');
INSERT INTO "ClassData" ("id", "name", "timetable", "organizationId") VALUES ('4a90385a-1244-4a7b-8cad-6fb1a51abfc8', 'Biology 401', 'TueThu 14001530', 'f6722fde-b863-4cb4-9fac-fdab4d288133');
INSERT INTO "ClassData" ("id", "name", "timetable", "organizationId") VALUES ('65df7ca0-ac50-4d83-8237-870e44d5a026', 'Chemistry 301', 'MonWed 09001030', '195e5cff-530e-4c84-b012-8fee87beb82f');
INSERT INTO "ClassData" ("id", "name", "timetable", "organizationId") VALUES ('ff92fbca-583a-4413-a0e8-b77546fd57c1', 'Biology 401', 'MonWedFri 10001130', 'c97b2db4-054d-4b94-8aeb-ba9e46edbbfb');
INSERT INTO "ClassData" ("id", "name", "timetable", "organizationId") VALUES ('42136d24-00f6-44cf-9c0a-c1f04f100537', 'History 501', 'Fri 13001500', '440375a6-2568-40c1-904d-11bbe74cf14f');
INSERT INTO "ClassData" ("id", "name", "timetable", "organizationId") VALUES ('b3fa3874-9cd5-4628-8c7f-7f8b05af8dbb', 'Chemistry 301', 'MonWedFri 10001130', '440375a6-2568-40c1-904d-11bbe74cf14f');
INSERT INTO "ClassData" ("id", "name", "timetable", "organizationId") VALUES ('2c74f1ad-b62a-4ccd-a0b7-33180c9de0a2', 'History 501', 'MonWed 09001030', '440375a6-2568-40c1-904d-11bbe74cf14f');
INSERT INTO "ClassData" ("id", "name", "timetable", "organizationId") VALUES ('d0e2666d-327d-4a4b-8d08-db958d1b4ae0', 'Chemistry 301', 'TueThu 14001530', '9bf339f7-4479-4068-9a98-e4eb823a2d68');

INSERT INTO "Course" ("id", "name", "syllabus", "classId") VALUES ('c1c77e45-df37-4e4b-bc9e-6f9fb351afd3', 'World History', 'Ancient Civilizations Medieval Period Renaissance Modern History', 'b3fa3874-9cd5-4628-8c7f-7f8b05af8dbb');
INSERT INTO "Course" ("id", "name", "syllabus", "classId") VALUES ('ec6719eb-3361-43be-8be0-1a83ec907dad', 'Advanced Chemistry', 'Programming Basics Data Structures Algorithms Computer Networks', '4a90385a-1244-4a7b-8cad-6fb1a51abfc8');
INSERT INTO "Course" ("id", "name", "syllabus", "classId") VALUES ('e428b4d5-bc62-4d98-915a-69219e0e1bff', 'World History', 'Algebra Geometry Trigonometry Calculus', 'd0e2666d-327d-4a4b-8d08-db958d1b4ae0');
INSERT INTO "Course" ("id", "name", "syllabus", "classId") VALUES ('ccd0844d-9e14-4ad6-9b39-12ae3400055d', 'Mathematics 101', 'Programming Basics Data Structures Algorithms Computer Networks', 'd0e2666d-327d-4a4b-8d08-db958d1b4ae0');
INSERT INTO "Course" ("id", "name", "syllabus", "classId") VALUES ('e1bd0d4d-a37b-4b4e-8185-34553f71ac2d', 'Advanced Chemistry', 'Programming Basics Data Structures Algorithms Computer Networks', '4a90385a-1244-4a7b-8cad-6fb1a51abfc8');
INSERT INTO "Course" ("id", "name", "syllabus", "classId") VALUES ('15ac1b28-6f35-4ec9-9196-0173506448ae', 'Computer Science Basics', 'Mechanics Thermodynamics Electromagnetism Optics', '39e3fdac-f17f-4f88-95c9-742986fb2cb2');
INSERT INTO "Course" ("id", "name", "syllabus", "classId") VALUES ('109ed818-8f03-4b91-a61b-1b796a1d6bd1', 'World History', 'Algebra Geometry Trigonometry Calculus', '42136d24-00f6-44cf-9c0a-c1f04f100537');
INSERT INTO "Course" ("id", "name", "syllabus", "classId") VALUES ('7f6eed9f-2ae3-4b00-9a9a-7a23423e4aef', 'Computer Science Basics', 'Programming Basics Data Structures Algorithms Computer Networks', 'd0e2666d-327d-4a4b-8d08-db958d1b4ae0');
INSERT INTO "Course" ("id", "name", "syllabus", "classId") VALUES ('3b6b1058-7ebe-42ce-a6bb-5e244bab6354', 'Computer Science Basics', 'Organic Chemistry Inorganic Chemistry Physical Chemistry Analytical Chemistry', '4a90385a-1244-4a7b-8cad-6fb1a51abfc8');
INSERT INTO "Course" ("id", "name", "syllabus", "classId") VALUES ('60590d76-b4ee-4a04-aceb-36c872728f56', 'Introduction to Physics', 'Programming Basics Data Structures Algorithms Computer Networks', 'ff92fbca-583a-4413-a0e8-b77546fd57c1');

INSERT INTO "Exam" ("id", "schedule", "type", "courseId") VALUES ('e5dac3fa-2169-41a9-9a59-d91d7e23aa9d', '2024-06-02T05:10:19.346Z', 'Oral', 'ccd0844d-9e14-4ad6-9b39-12ae3400055d');
INSERT INTO "Exam" ("id", "schedule", "type", "courseId") VALUES ('061d678f-3055-42c0-8f1c-5954321aa205', '2024-01-13T01:00:28.713Z', 'Final', '15ac1b28-6f35-4ec9-9196-0173506448ae');
INSERT INTO "Exam" ("id", "schedule", "type", "courseId") VALUES ('2b367ff6-7222-4a0b-9e3d-b7fb23f94f5c', '2025-07-02T21:57:23.130Z', 'Final', 'c1c77e45-df37-4e4b-bc9e-6f9fb351afd3');
INSERT INTO "Exam" ("id", "schedule", "type", "courseId") VALUES ('f8c94025-fbe0-49ea-aa0d-fd06250a5e28', '2024-12-14T03:28:14.215Z', 'Practical', 'c1c77e45-df37-4e4b-bc9e-6f9fb351afd3');
INSERT INTO "Exam" ("id", "schedule", "type", "courseId") VALUES ('a7425aa1-7651-4052-8337-9eb4cda5ff5f', '2024-10-19T10:04:26.464Z', 'Oral', '7f6eed9f-2ae3-4b00-9a9a-7a23423e4aef');
INSERT INTO "Exam" ("id", "schedule", "type", "courseId") VALUES ('7fc1c9ef-fb75-438c-a23f-bd68543fc46e', '2024-01-25T03:09:57.948Z', 'Midterm', 'e1bd0d4d-a37b-4b4e-8185-34553f71ac2d');
INSERT INTO "Exam" ("id", "schedule", "type", "courseId") VALUES ('a9648da3-9a7e-4561-aedd-f3bdcaffc81d', '2024-02-10T21:08:00.745Z', 'Oral', 'c1c77e45-df37-4e4b-bc9e-6f9fb351afd3');
INSERT INTO "Exam" ("id", "schedule", "type", "courseId") VALUES ('a5778265-9a9e-4b4f-bd41-6ec6e15e6bd3', '2024-09-04T14:39:35.476Z', 'Oral', '60590d76-b4ee-4a04-aceb-36c872728f56');
INSERT INTO "Exam" ("id", "schedule", "type", "courseId") VALUES ('025b8a3b-9619-4bc6-9d40-750142e3462c', '2025-06-04T03:53:17.379Z', 'Practical', '60590d76-b4ee-4a04-aceb-36c872728f56');
INSERT INTO "Exam" ("id", "schedule", "type", "courseId") VALUES ('8376160c-2007-48b1-a493-d6c3e5042691', '2024-06-20T15:22:53.374Z', 'Oral', 'c1c77e45-df37-4e4b-bc9e-6f9fb351afd3');

INSERT INTO "Fee" ("id", "amount", "dueDate", "status", "studentId") VALUES ('ab94087c-4c94-4f77-879f-9b8548a838d7', 736, '2023-10-28T03:21:40.397Z', 'Paid', '1f5ea0d1-6290-4274-8610-e2adfbbdbcb3');
INSERT INTO "Fee" ("id", "amount", "dueDate", "status", "studentId") VALUES ('ee4f9b0d-d2ad-48da-aea9-faa5ff75ad04', 428, '2023-10-29T21:34:25.498Z', 'Paid', '5c9ac633-ed9b-49ca-8a54-7e64809952b4');
INSERT INTO "Fee" ("id", "amount", "dueDate", "status", "studentId") VALUES ('cf58c22f-cda9-4f86-b7ca-41aa0df1b931', 86, '2025-03-19T12:08:27.968Z', 'Paid', 'fec0cc38-b577-415c-bc39-b4bf9448b42d');
INSERT INTO "Fee" ("id", "amount", "dueDate", "status", "studentId") VALUES ('9c4c05aa-c23b-4c0e-ac21-2be9915111e0', 268, '2023-11-18T03:26:48.847Z', 'Paid', '40f677bd-b671-449c-8020-e4faacb606cb');
INSERT INTO "Fee" ("id", "amount", "dueDate", "status", "studentId") VALUES ('dcb0cd28-47c1-4b3d-9412-937b1b4cdc44', 179, '2023-12-13T05:27:40.581Z', 'Pending', '40f677bd-b671-449c-8020-e4faacb606cb');
INSERT INTO "Fee" ("id", "amount", "dueDate", "status", "studentId") VALUES ('9287ab7a-3f69-4a5f-8f33-d408bdeffda1', 160, '2024-06-07T20:41:54.910Z', 'Pending', '11b28fa5-6b40-49ee-b8fb-609e34501f91');
INSERT INTO "Fee" ("id", "amount", "dueDate", "status", "studentId") VALUES ('a64360f8-ca70-4b53-8a40-23bc4850b35a', 426, '2025-08-11T06:49:07.660Z', 'Overdue', '4c6e1d13-11db-4fae-80e4-ac93b2b43daf');
INSERT INTO "Fee" ("id", "amount", "dueDate", "status", "studentId") VALUES ('81605042-3ede-414e-b6a7-8f1132240817', 119, '2025-08-27T13:31:22.885Z', 'Pending', '4c6e1d13-11db-4fae-80e4-ac93b2b43daf');
INSERT INTO "Fee" ("id", "amount", "dueDate", "status", "studentId") VALUES ('1291a760-2de9-4bdd-986b-db8ef4b79ace', 88, '2024-01-02T00:37:56.192Z', 'Overdue', '4c6e1d13-11db-4fae-80e4-ac93b2b43daf');
INSERT INTO "Fee" ("id", "amount", "dueDate", "status", "studentId") VALUES ('b82acb2e-7e92-4077-aa1b-f2e9f0968992', 298, '2024-08-22T02:53:54.296Z', 'Overdue', 'df3277e0-b0a6-4589-b0e0-2a10e6eeef0e');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })

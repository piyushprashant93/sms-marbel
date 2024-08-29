/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createOrganizationRouter from "./Organization.router";
import createStudentRouter from "./Student.router";
import createFeeRouter from "./Fee.router";
import createTeacherRouter from "./Teacher.router";
import createClassDataRouter from "./ClassData.router";
import createCourseRouter from "./Course.router";
import createExamRouter from "./Exam.router";
import createRagVectorRouter from "./RagVector.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as StudentClientType } from "./Student.router";
import { ClientType as FeeClientType } from "./Fee.router";
import { ClientType as TeacherClientType } from "./Teacher.router";
import { ClientType as ClassDataClientType } from "./ClassData.router";
import { ClientType as CourseClientType } from "./Course.router";
import { ClientType as ExamClientType } from "./Exam.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        student: createStudentRouter(router, procedure),
        fee: createFeeRouter(router, procedure),
        teacher: createTeacherRouter(router, procedure),
        classData: createClassDataRouter(router, procedure),
        course: createCourseRouter(router, procedure),
        exam: createExamRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    student: StudentClientType<AppRouter>;
    fee: FeeClientType<AppRouter>;
    teacher: TeacherClientType<AppRouter>;
    classData: ClassDataClientType<AppRouter>;
    course: CourseClientType<AppRouter>;
    exam: ExamClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
}
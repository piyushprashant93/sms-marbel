/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.TeacherInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).teacher.createMany(input as any))),

        create: procedure.input($Schema.TeacherInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).teacher.create(input as any))),

        deleteMany: procedure.input($Schema.TeacherInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).teacher.deleteMany(input as any))),

        delete: procedure.input($Schema.TeacherInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).teacher.delete(input as any))),

        findFirst: procedure.input($Schema.TeacherInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).teacher.findFirst(input as any))),

        findMany: procedure.input($Schema.TeacherInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).teacher.findMany(input as any))),

        findUnique: procedure.input($Schema.TeacherInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).teacher.findUnique(input as any))),

        updateMany: procedure.input($Schema.TeacherInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).teacher.updateMany(input as any))),

        update: procedure.input($Schema.TeacherInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).teacher.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TeacherCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TeacherCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TeacherCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TeacherCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TeacherCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TeacherCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TeacherGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TeacherGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TeacherCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TeacherCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TeacherGetPayload<T>, Context>) => Promise<Prisma.TeacherGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TeacherDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TeacherDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TeacherDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TeacherDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TeacherDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TeacherDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TeacherGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TeacherGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TeacherDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TeacherDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TeacherGetPayload<T>, Context>) => Promise<Prisma.TeacherGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TeacherFindFirstArgs, TData = Prisma.TeacherGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TeacherFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TeacherGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TeacherFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TeacherFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TeacherGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TeacherGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TeacherFindManyArgs, TData = Array<Prisma.TeacherGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TeacherFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TeacherGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TeacherFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TeacherFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TeacherGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TeacherGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TeacherFindUniqueArgs, TData = Prisma.TeacherGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TeacherFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TeacherGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TeacherFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TeacherFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TeacherGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TeacherGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TeacherUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TeacherUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TeacherUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TeacherUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TeacherUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TeacherUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TeacherGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TeacherGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TeacherUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TeacherUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TeacherGetPayload<T>, Context>) => Promise<Prisma.TeacherGetPayload<T>>
            };

    };
}

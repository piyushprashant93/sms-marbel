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

        createMany: procedure.input($Schema.StudentInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).student.createMany(input as any))),

        create: procedure.input($Schema.StudentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).student.create(input as any))),

        deleteMany: procedure.input($Schema.StudentInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).student.deleteMany(input as any))),

        delete: procedure.input($Schema.StudentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).student.delete(input as any))),

        findFirst: procedure.input($Schema.StudentInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).student.findFirst(input as any))),

        findMany: procedure.input($Schema.StudentInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).student.findMany(input as any))),

        findUnique: procedure.input($Schema.StudentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).student.findUnique(input as any))),

        updateMany: procedure.input($Schema.StudentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).student.updateMany(input as any))),

        update: procedure.input($Schema.StudentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).student.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.StudentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.StudentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudentGetPayload<T>, Context>) => Promise<Prisma.StudentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.StudentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.StudentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudentGetPayload<T>, Context>) => Promise<Prisma.StudentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.StudentFindFirstArgs, TData = Prisma.StudentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.StudentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StudentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudentFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StudentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StudentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StudentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.StudentFindManyArgs, TData = Array<Prisma.StudentGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.StudentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.StudentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudentFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StudentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.StudentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.StudentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.StudentFindUniqueArgs, TData = Prisma.StudentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.StudentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StudentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StudentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StudentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StudentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.StudentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.StudentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudentGetPayload<T>, Context>) => Promise<Prisma.StudentGetPayload<T>>
            };

    };
}

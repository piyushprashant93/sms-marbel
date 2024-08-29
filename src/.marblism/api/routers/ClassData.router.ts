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

        createMany: procedure.input($Schema.ClassDataInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).classData.createMany(input as any))),

        create: procedure.input($Schema.ClassDataInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).classData.create(input as any))),

        deleteMany: procedure.input($Schema.ClassDataInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).classData.deleteMany(input as any))),

        delete: procedure.input($Schema.ClassDataInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).classData.delete(input as any))),

        findFirst: procedure.input($Schema.ClassDataInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).classData.findFirst(input as any))),

        findMany: procedure.input($Schema.ClassDataInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).classData.findMany(input as any))),

        findUnique: procedure.input($Schema.ClassDataInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).classData.findUnique(input as any))),

        updateMany: procedure.input($Schema.ClassDataInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).classData.updateMany(input as any))),

        update: procedure.input($Schema.ClassDataInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).classData.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ClassDataCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClassDataCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClassDataCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClassDataCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ClassDataCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClassDataCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ClassDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ClassDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClassDataCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClassDataCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ClassDataGetPayload<T>, Context>) => Promise<Prisma.ClassDataGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ClassDataDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClassDataDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClassDataDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClassDataDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ClassDataDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClassDataDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ClassDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ClassDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClassDataDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClassDataDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ClassDataGetPayload<T>, Context>) => Promise<Prisma.ClassDataGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ClassDataFindFirstArgs, TData = Prisma.ClassDataGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ClassDataFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ClassDataGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ClassDataFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ClassDataFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ClassDataGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ClassDataGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ClassDataFindManyArgs, TData = Array<Prisma.ClassDataGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ClassDataFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ClassDataGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ClassDataFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ClassDataFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ClassDataGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ClassDataGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ClassDataFindUniqueArgs, TData = Prisma.ClassDataGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ClassDataFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ClassDataGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ClassDataFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ClassDataFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ClassDataGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ClassDataGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ClassDataUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClassDataUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClassDataUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClassDataUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ClassDataUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClassDataUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ClassDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ClassDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClassDataUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClassDataUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ClassDataGetPayload<T>, Context>) => Promise<Prisma.ClassDataGetPayload<T>>
            };

    };
}

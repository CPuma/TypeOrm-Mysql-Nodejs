import { Request, Response, NextFunction } from "express";
import { User } from "../entity/User";
import { getRepository } from "typeorm";
import { get } from "https";

export const getUsers = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.status(200).json({ ok: true, data: { users } });
};
export const getUserByID = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { id } = req.params;

    if (!Number(id))
        return res.status(400).json({
            ok: false,
            error: {
                message: "Id Invalido o inexistente"
            }
        });

    const user = await getRepository(User).findOne(id);

    if (!user)
        return res.status(400).json({
            ok: false,
            error: {
                message: `No se encontro Usuario`
            }
        });

    return res.status(200).json({ ok: true, data: { user } });
};

export const createUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { firstName, lastName, age } = req.body;
        const newUSer = getRepository(User).create({
            firstName,
            lastName,
            age
        });
        const result = await getRepository(User).save(newUSer);
        return res.json({ ok: true, data: { user: result } });
    } catch (error) {
        return res
            .status(500)
            .json({ ok: false, error: { message: error.message } });
    }
};
export const updateUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { firstName, lastName, age } = req.body;
        const { id } = req.params;
        if (!Number(id)) throw new Error("Id invalido");
        const user = await getRepository(User).findOne(id);
        if (!user) throw new Error("No existe usuario");

        getRepository(User).merge(user, { firstName, lastName, age });
        const result = await getRepository(User).save(user);
        return res.status(200).json({ ok: true, data: { user: result } });
    } catch (error) {
        return res
            .status(500)
            .json({ ok: false, error: { message: error.message } });
    }
};
export const deleteUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { id } = req.params;
        if (!Number(id)) throw new Error("Id Invalido");
        const result = await getRepository(User).delete(id);
        return res.status(200).json({ ok: true, data: result });
    } catch (error) {
        return res
            .status(500)
            .json({ ok: false, error: { message: error.message } });
    }
};

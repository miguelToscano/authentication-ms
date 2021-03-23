import express from 'express';

export const checkHealth = async (req: express.Request, res: express.Response, 
    next: express.NextFunction) => {
    try {
        return res.status(200).send({ message: 'Alive!' });
    } catch (error) {
        next(error);
    }
};

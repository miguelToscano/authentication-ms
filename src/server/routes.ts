import express from 'express';
import * as controllers from '../controllers';

export const bind = (app: express.Application): void => {
    app.get('/health', controllers.checkHealth);
};

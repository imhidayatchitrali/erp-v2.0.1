import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: "postgresql://postgres:admin@localhost:5432/erpv2.0.1?schema=public"
                },
            },
        });
    }
}

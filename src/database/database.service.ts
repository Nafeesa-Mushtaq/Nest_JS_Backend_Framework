import { Injectable, OnModuleInit, OnApplicationShutdown   } from '@nestjs/common';

@Injectable()
export class DatabaseService{
    private isConnected = false;

    onModuleInit() {
        this.isConnected = true;
        console.log("Database connected successfully.");
    }
    onApplicationShutdown(signal : string) {
        this.isConnected = false;
        console.log(`Database connection closed due to signal: ${signal}`);
    }

    getstatus() {
        return this.isConnected ? "Database is connected." : "Database is not connected.";
    }
}

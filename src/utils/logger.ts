export class Logger {
    private static instance: Logger | null;

    private constructor() { }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    public log(...args: unknown[]) {
        console.log("[MediaGridPlugin::info]", ...args)
    }

    public warn(...args: unknown[]) {
        console.warn("[MediaGridPlugin:warn]", ...args)
    }
}
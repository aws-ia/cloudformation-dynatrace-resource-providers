import {
    CronTrigger,
    IntervalTrigger,
    ScheduleRequest, TimeTrigger
} from "./models";
import {Expose, plainToClass, Transform, Type} from "class-transformer";
import {
    BaseModel,
    Optional,
    transformValue
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";


class ScheduleRequestWithOneOf extends ScheduleRequest {
    @Type(() => BaseModel, {
        discriminator: {
            property: 'type',
            subTypes: [
                { value: CronTrigger, name: 'cron' },
                { value: IntervalTrigger, name: 'interval' },
                { value: TimeTrigger, name: 'time' },
            ],
        },
        keepDiscriminatorProperty: true
    })
    @Expose({ name: 'Trigger' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'trigger', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    trigger?: Optional<CronTrigger | IntervalTrigger | TimeTrigger>;
}

const plop = {
    // @ts-ignore
    "rule": null,
    "trigger": {
        "type": "cron",
        "cron": "0 0 * * * "
    },
    "timezone": "Europe/Paris",
    "isActive": false,
    "filterParameters": {},
    "inputs": {}
}

console.log(plop);
console.log(plainToClass(ScheduleRequest, plop));
console.log(plainToClass(ScheduleRequestWithOneOf, plop));
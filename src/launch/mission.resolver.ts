import { Resolver, ResolveField, Args, Parent } from '@nestjs/graphql';
import { PatchSize } from '../graphql';

@Resolver('Mission')
export class MissionResolver {
    @ResolveField()
    missionPatch(
        @Parent() mission,
        @Args('size') size:PatchSize){
            switch(size){
                case PatchSize.SMALL:
                    return mission.missionPatchSmall;
                case PatchSize.LARGE:
                    return mission.missionPatchLarge;
                defualt:
                    return null;
            }
        } 
}

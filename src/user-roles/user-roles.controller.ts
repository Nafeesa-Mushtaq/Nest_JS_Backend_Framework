import { Controller, UseGuards , Get } from '@nestjs/common';
import { Roles } from 'src/guards/roles/role.decorator';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles('admin')
    getAdminData() {
        return "This data is only for admins.";
    }
    @Get('user-data')
    getUserData() {
        return "This data is for all users.";
    }
}

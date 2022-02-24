import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/user/user.decorator';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@User() user, @Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto, user.person.id);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@User() user) {
    return this.addressService.findAll(user.person.id);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@User() user, @Param('id') id: string) {
    return this.addressService.findOne(+id, user.person.id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @User() user,
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return this.addressService.update(+id, updateAddressDto, user.person.id);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@User() user, @Param('id') id: string) {
    return this.addressService.remove(+id);
  }
}

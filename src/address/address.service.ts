import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private prismaService: PrismaService) {}

  validInputedData(inputedData: any) {
    if (!inputedData.city) {
      throw new BadRequestException('City is required');
    }
    if (!inputedData.country) {
      throw new BadRequestException('Country is required');
    }
    if (!inputedData.district) {
      throw new BadRequestException('District is required');
    }
    if (!inputedData.state) {
      throw new BadRequestException('State is required');
    }
    if (!inputedData.street) {
      throw new BadRequestException('Street is required');
    }
  }

  async create(createAddressDto: CreateAddressDto, personId: number) {
    this.validInputedData(createAddressDto);

    return this.prismaService.addresses.create({
      data: {
        city: createAddressDto.city,
        complement: createAddressDto.complement,
        country: createAddressDto.country,
        district: createAddressDto.district,
        number: createAddressDto.number,
        state: createAddressDto.state,
        street: createAddressDto.street,
        zipcode: createAddressDto.zipcode,
        personId,
      },
    });
  }

  async findAll(personId: number) {
    return this.prismaService.addresses.findMany({ where: { personId } });
  }

  async findOne(id: number, personId: number) {
    return this.prismaService.addresses.findFirst({
      where: { id: id, personId: personId },
    });
  }

  async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
    personId: number,
  ) {
    this.validInputedData(updateAddressDto);

    return this.prismaService.addresses.update({
      data: {
        city: updateAddressDto.city,
        complement: updateAddressDto.complement,
        country: updateAddressDto.country,
        district: updateAddressDto.district,
        number: updateAddressDto.number,
        state: updateAddressDto.state,
        street: updateAddressDto.street,
        zipcode: updateAddressDto.zipcode,
      },
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    return this.prismaService.addresses.delete({ where: { id } });
  }
}

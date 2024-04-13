import { FileMimeType } from '../../enum/file-mimte-type.enum';

export class BasicFileStructureResponseDto {
  id: number;
  path: string;
  title: string;
  depth: number;
  color: string | null;
  sizeInBytes: number | null;
  fileExstensionRaw: string | null;
  mimeTypeRaw: string | null;
  mimeType: FileMimeType | null;
  isEditable: boolean | null;
  isFile: boolean;
  rootParentId: number | null;
  parentId: number | null;

  lastModifiedAt: Date | null;
  createdAt: Date;
  children: BasicFileStructureResponseDto[] | null;
}

export class GetDuplicateStatusResponseDto {
  title: string;
  hasDuplicate: boolean;
}

export class GetGeneralInfoResponseDto {
  totalSize: number;
}

export class FileStructureBinDto {
  id: number;
  nameUUID: string;
  path: string;
  userId: number;
  fileStructureId: number;
  createdAt: Date;
  fileStructure: BasicFileStructureResponseDto;
}

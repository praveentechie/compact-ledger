import ElectronCollection from '../database/ElectronCollection';
import ElectronDomainBase from '../database/ElectronDomainBase';

// ### typescript: custom type declaration
type optionalString = string | null | undefined;
type optionalElectronCollection = ElectronCollection<ElectronDomainBase> | null | undefined;

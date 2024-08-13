import { Container } from "inversify";
import "reflect-metadata";
import { IAccountService } from "src/shared/api/interfaces/accountService";
import { IAppService } from "src/shared/api/interfaces/appService";
import { AccountService } from "src/shared/api/services/accountService";
import { AppService } from "src/shared/api/services/appService";
import { IAnnouncementService } from "./shared/api/interfaces/announcementService";
import { ICapacitorService } from "./shared/api/interfaces/capacitorService";
import { ICommunicationsService } from "./shared/api/interfaces/communicationService";
import { IGpsService } from "./shared/api/interfaces/gpsService";
import { IIOService } from "./shared/api/interfaces/ioService";
import { IIpcService } from "./shared/api/interfaces/ipcService";
import { IMapService } from "./shared/api/interfaces/mapService";
import { IPanelService } from "./shared/api/interfaces/panelService";
import { IPassengerCountService } from "./shared/api/interfaces/passengerCountService";
import { IPathwayService } from "./shared/api/interfaces/pathwayService";
import { ISettingsService } from "./shared/api/interfaces/settingService";
import { IStopService } from "./shared/api/interfaces/stopService";
import { ITripService } from "./shared/api/interfaces/tripService";
import { IWebWorkerService } from "./shared/api/interfaces/webWorkerService";
import { IWorkOrderService } from "./shared/api/interfaces/workOrderService";
import { AnnouncementService } from "./shared/api/services/announcementService";
import { CapacitorService } from "./shared/api/services/capacitorService";
import { CommunicationsService } from "./shared/api/services/communicationService";
import { IOService } from "./shared/api/services/io/development/ioService";
import { IpcService } from "./shared/api/services/ipcService";
import { GMapService } from "./shared/api/services/mapService";
import { PathwayService } from "./shared/api/services/pathwayService";
import { SettingsService } from "./shared/api/services/settingService";
import { StopService } from "./shared/api/services/stopService";
import { TripService } from "./shared/api/services/tripService";
import { WebWorkerService } from "./shared/api/services/webWorkerService";
import { WorkOrderService } from "./shared/api/services/workOrderService";
import { IObuConfig } from "./shared/models/app";
// import { usePlatform } from "./shared/composables/usePlatform";

// TODO: Ovaj parametar treba tipizirati
export function getService<T>(symbol: any): T {
  return DIContainer.get<T>(symbol);
}

export const bindIOServices = (obuConfig: IObuConfig) => {
  const gpsInterface = obuConfig.gpsInterface ?? "development";
  const panelInterface = obuConfig.panelInterface ?? "development";
  const passengerCountInterface = obuConfig.passengerCountInterface ?? "development";

  import(`./shared/api/services/io/${gpsInterface}/gpsService.ts`).then((imported) => {
    DIContainer.bind<IGpsService>(Services.GpsService).to(imported.GpsService).inSingletonScope();
  });

  import(`./shared/api/services/io/${panelInterface}/panelService.ts`).then((imported) => {
    DIContainer.bind<IPanelService>(Services.PanelService)
      .to(imported.PanelService)
      .inSingletonScope();
  });

  import(`./shared/api/services/io/${passengerCountInterface}/passengerCountService.ts`).then(
    (imported) => {
      DIContainer.bind<IPassengerCountService>(Services.PassengerCountService)
        .to(imported.PassengerCountService)
        .inSingletonScope();
    }
  );
};

export class Services {
  static readonly AccountService = Symbol("IAccountService");
  static readonly AppService = Symbol("IAppService");
  static readonly StopService = Symbol("IStopService");
  static readonly PathwayService = Symbol("IPathwayService");
  static readonly WorkOrderService = Symbol("IWorkOrderService");
  static readonly TripService = Symbol("ITripService");
  static readonly AnnouncementService = Symbol("IAnnouncementService");
  static readonly CommunicationsService = Symbol("ICommunicationsService");
  static readonly SettingsService = Symbol("ISettingsService");
  static readonly MapService = Symbol("IMapService");
  static readonly GpsService = Symbol("IGpsService");
  static readonly PanelService = Symbol("IPanelService");
  static readonly PassengerCountService = Symbol("IPassengerCountService");
  static readonly CapacitorService = Symbol("ICapacitorService");
  static readonly WebWorkerService = Symbol("IWebWorkerService");
  static readonly IPCService = Symbol("IIPCService");
  static readonly IOService = Symbol("IIOService");
}

const DIContainer = new Container();

DIContainer.bind<IAccountService>(Services.AccountService).to(AccountService).inSingletonScope();
DIContainer.bind<IAppService>(Services.AppService).to(AppService).inSingletonScope();
DIContainer.bind<ICommunicationsService>(Services.CommunicationsService)
  .to(CommunicationsService)
  .inSingletonScope();
DIContainer.bind<IStopService>(Services.StopService).to(StopService).inSingletonScope();
DIContainer.bind<IPathwayService>(Services.PathwayService).to(PathwayService).inSingletonScope();
DIContainer.bind<IWorkOrderService>(Services.WorkOrderService)
  .to(WorkOrderService)
  .inSingletonScope();
DIContainer.bind<ITripService>(Services.TripService).to(TripService).inSingletonScope();
DIContainer.bind<IAnnouncementService>(Services.AnnouncementService)
  .to(AnnouncementService)
  .inSingletonScope();
DIContainer.bind<ISettingsService>(Services.SettingsService).to(SettingsService).inSingletonScope();
DIContainer.bind<IMapService>(Services.MapService).to(GMapService).inTransientScope();
DIContainer.bind<ICapacitorService>(Services.CapacitorService)
  .to(CapacitorService)
  .inSingletonScope();
DIContainer.bind<IWebWorkerService>(Services.WebWorkerService)
  .to(WebWorkerService)
  .inSingletonScope();
DIContainer.bind<IIpcService>(Services.IPCService).to(IpcService).inSingletonScope();
DIContainer.bind<IIOService>(Services.IOService).to(IOService).inSingletonScope();

export default DIContainer;

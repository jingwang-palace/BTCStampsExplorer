import { Handlers } from "$fresh/server.ts";
import { Src101Controller } from "$server/controller/src101Controller.ts";
import { ResponseUtil } from "$lib/utils/responseUtil.ts";
import { getPaginationParams } from "$lib/utils/paginationUtils.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    try {
      const { tx_hash } = ctx.params;
      const url = new URL(req.url);
      const { limit, page } = getPaginationParams(url);

      const queryParams = {
        tx_hash,
        limit: limit || 1,
        page: page || 1,
      };
      const result = await Src101Controller.handleValidSrc101TxRequest(
        queryParams
      );

      if (!result || Object.keys(result).length === 0) {
        console.log("Empty result received:", result);
        return ResponseUtil.error("No data found", 404);
      }

      return ResponseUtil.success(result);
    } catch (error) {
      console.error("Error in index handler:", error);
      return ResponseUtil.handleError(
        error,
        "Error processing src101 valid tx request",
      );
    }
  }
}
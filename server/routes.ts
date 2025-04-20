import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes - prefix all routes with /api
  
  // Get all tournaments
  app.get("/api/tournaments", async (req, res) => {
    try {
      const tournaments = await storage.getTournaments();
      
      // Format dates for display
      const formattedTournaments = tournaments.map(tournament => ({
        ...tournament,
        date: formatDateRange(tournament.startDate, tournament.endDate)
      }));
      
      res.json(formattedTournaments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving tournaments" });
    }
  });

  // Get featured tournaments
  app.get("/api/tournaments/featured", async (req, res) => {
    try {
      const tournaments = await storage.getFeaturedTournaments();
      
      // Format dates for display
      const formattedTournaments = tournaments.map(tournament => ({
        ...tournament,
        date: formatDateRange(tournament.startDate, tournament.endDate)
      }));
      
      res.json(formattedTournaments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving featured tournaments" });
    }
  });

  // Get a specific tournament by ID
  app.get("/api/tournaments/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const tournament = await storage.getTournament(id);
      if (!tournament) {
        return res.status(404).json({ message: "Tournament not found" });
      }

      // Get teams for this tournament
      const teams = await storage.getTeams(id);
      
      // Format dates for display
      const formattedTournament = {
        ...tournament,
        date: formatDateRange(tournament.startDate, tournament.endDate),
        teams
      };
      
      res.json(formattedTournament);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving tournament" });
    }
  });

  // Get all stats
  app.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getStats();
      res.json(stats);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving stats" });
    }
  });

  // Get teams for a tournament
  app.get("/api/tournaments/:id/teams", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const teams = await storage.getTeams(id);
      res.json(teams);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving teams" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Create contact message
      const message = await storage.createContactMessage(validatedData);
      
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      res.status(500).json({ message: "Error submitting contact form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

// Helper function to format date range for display
function formatDateRange(startDate: Date, endDate: Date): string {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  const start = startDate.toLocaleDateString('en-US', options);
  const end = endDate.toLocaleDateString('en-US', options);
  
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  
  // Add year only if different from current year or if start and end have different years
  if (startYear !== endYear) {
    return `${start}, ${startYear} - ${end}, ${endYear}`;
  }
  
  // Add year only if different from current year
  const currentYear = new Date().getFullYear();
  if (startYear !== currentYear) {
    return `${start} - ${end}, ${startYear}`;
  }
  
  return `${start} - ${end}`;
}

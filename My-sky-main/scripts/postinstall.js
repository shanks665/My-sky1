#!/usr/bin/env node

/**
 * Post-install script for Meetify
 * Handles platform-specific dependencies
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Running post-install script...');

// Check if we're on macOS
const isMacOS = process.platform === 'darwin';

if (isMacOS) {
  console.log('📱 Detected macOS - installing CocoaPods dependencies...');
  try {
    execSync('npx pod-install ios', { stdio: 'inherit' });
    console.log('✅ CocoaPods dependencies installed successfully');
  } catch (error) {
    console.warn('⚠️  CocoaPods installation failed:', error.message);
    console.log('💡 This is normal for CI/CD on non-macOS runners');
  }
} else {
  console.log('💻 Skipping CocoaPods installation (not on macOS)');
}

// Create .husky directory if it doesn't exist
const huskyDir = path.join(process.cwd(), '.husky');
if (!fs.existsSync(huskyDir)) {
  console.log('🔧 Creating .husky directory...');
  fs.mkdirSync(huskyDir, { recursive: true });
}

console.log('✅ Post-install script completed');
